const express = require("express");
const projectsController = require("../controllers/projectsController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", projectsController.getProjects);
router.get("/:projectId", projectsController.getProject);

router.use(authController.protect);
router.post("/", projectsController.createProject);
router.patch("/:projectId", projectsController.updateProject);
router.delete("/:projectId", projectsController.deleteProject);

module.exports = router;
