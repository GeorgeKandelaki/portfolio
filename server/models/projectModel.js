const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: String,
        liveURL: String,
        repoURL: String,
        difficulty: { type: Number, enum: [0, 1, 2, 3, 4] },
        description: String,
        toolsUsed: [
            { type: String, enum: ["js", "react", "nodejs", "python", "mongodb", "sql", "scss", "css", "html", "api"] },
        ],
        screenshot: String,
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
