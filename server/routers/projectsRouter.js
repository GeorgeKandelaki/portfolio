const express = require("express");
const projectsController = require("../controllers/projectsController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", projectsController.getProjects);

router.use(authController.protect);
router.post("/", projectsController.createProject);
router.patch("/:id", projectsController.updateProject);
router.delete("/:id", projectsController.deleteProject);

module.exports = router;
