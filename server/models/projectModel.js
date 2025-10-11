const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: String,
        liveURL: String,
        repoURL: String,
        difficulty: { type: Number, enum: [0, 1, 2, 3, 4] },
        description: String,
        tags: [String],
        screenshot: String,
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
