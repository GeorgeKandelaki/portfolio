const catchAsync = require("../utils/catchAsync");

const Project = require("../models/projectModel");

exports.getProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({});
    if (!projects) next();
    return res.status(200).json({
        status: "Success",
        results: projects.length,
        data: {
            projects,
        },
    });
});

exports.createProject = catchAsync(async (req, res, next) => {});

exports.updateProject = catchAsync(async (req, res, next) => {});

exports.deleteProject = catchAsync(async (req, res, next) => {});
