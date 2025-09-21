const catchAsync = require("../utils/catchAsync");

exports.getProjects = catchAsync(async (req, res, next) => {
    res.status(200);
});
