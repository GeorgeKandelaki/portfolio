const catchAsync = require("../utils/catchAsync");

const Project = require("../models/projectModel");

exports.getProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({});

    if (!projects) next();

    res.status(200).json({
        status: "Success",
        data: {
            items: projects.length,
            projects,
        },
    });
});
