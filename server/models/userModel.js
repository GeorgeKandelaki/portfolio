const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    role: { type: String, enum: ["admin", "user", "none"] },
});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);

    next();
});

userSchema.methods.comparePassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
