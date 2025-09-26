const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

function signToken(data) {
    return jwt.sign(data, process.env.JWT_SECRET);
}

function createSendToken(user, statusCode, req, res) {
    // 1) Sign the Token
    const token = signToken({ id: user.id });
    // 2) Set Cookie Options
    const cookieOptions = {
        httpOnly: true,
        sameSite: "none",
        secure: true,
    };
    // 3) Add token to cookies
    res.cookie("jwt", token, cookieOptions);
    // 4) Remove password from the user
    user.password = undefined;
    // 5) Send the user
    res.status(statusCode).json({
        status: "Success",
        token,
        data: {
            user,
        },
    });
}

exports.protect = catchAsync(async function (req, res, next) {
    let token;

    // req.header["authorization"]
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
        token = req.headers.authorization.split(" ")[1];
    else if (req.cookies.jwt) token = req.cookies.jwt;

    if (!token) return next(new Error("Token is invalid or not found! Check if you are logged in."));

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id).select("-password");

    if (!currentUser) return next(new Error("Client doesn't have the permission to send Requests to this Route!"));

    req.user = currentUser;
    next();
});

exports.signup = catchAsync(async function (req, res, next) {
    const { name, password } = req.body;

    const user = await User.create({ name, password });

    return createSendToken(user, 201, req, res);
});

exports.login = catchAsync(async function (req, res, next) {
    const { name, password } = req.body;

    const user = await User.findOne({ name }).select("+password");

    if (!user) return next(new Error("User couldn't be found or is invalid!"));

    if (!(await user.comparePasswords(password, user.password)))
        return next(new Error("Users password or email is incorrect!"));

    return createSendToken(user, 201, req, res);
});

exports.checkLoggedIn = catchAsync(async function (req, res, next) {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
        token = req.headers.authorization.split(" ")[1];
    else if (req.cookies.jwt) token = req.cookies.jwt;

    if (!token) return res.status(200).json({ status: "Success", isAuthenticated: false });

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        const currentUser = await User.findById(decoded.id).select("-password");

        if (!currentUser) return res.status(200).json({ status: "Success", isAuthenticated: false });

        return res.status(200).json({ status: "Success", isAuthenticated: true, user: currentUser });
    } catch (err) {
        return res.status(200).json({ status: "Success", isAuthenticated: false });
    }
});
