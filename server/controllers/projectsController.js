const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Project = require("../models/projectModel");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/images/projects"),
    filename: (req, file, cb) => {
        cb(null, "project" + "_" + Date.now() + "_" + file.originalname.toLowerCase().replaceAll(" ", "_"));
    },
});

exports.upload = multer({ storage: storage });

exports.getProjects = catchAsync(async (req, res, next) => {
    const projects = await Project.find({});
    if (!projects) return next(new AppError("No Projects were found.", 404));

    return res.status(200).json({
        status: "Success",
        results: projects.length,
        data: {
            projects,
        },
    });
});

exports.getProject = catchAsync(async (req, res, next) => {
    const project = await Project.findById(req.params.projectId);

    if (!project) return next(new AppError("Couldn't Find the Project.", 404));

    return res.status(200).json({
        status: "Success",
        data: {
            project,
        },
    });
});

exports.createProject = catchAsync(async (req, res, next) => {
    const project = await Project.create({
        ...req.body,
        screenshot: req.file.filename.toLowerCase().replaceAll(" ", "_"),
    });

    return res.status(201).json({
        status: "Success",
        data: {
            project,
        },
    });
});

exports.updateProject = catchAsync(async (req, res, next) => {
    const obj = { ...req.body };

    if (req.file && req.file.filename) obj["screenshot"] = req.file.filename.toLowerCase().replaceAll(" ", "_");

    const updatedProject = await Project.findByIdAndUpdate(req.params.projectId, obj, {
        new: true,
        runValidators: true,
    });

    return res.status(200).json({
        status: "Success",
        data: {
            project: updatedProject,
        },
    });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
    await Project.findByIdAndDelete(req.params.projectId);

    return res.status(200).json({ status: "Success", data: null });
});
