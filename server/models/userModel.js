const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);

    next();
});

userSchema.methods.comparePassword = async function (userPassword, candidatePassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
