const express = require("express");
const projectsController = require("../controllers/projectsController");

const router = express.Router();

router.get("/write_frontend_mentor_data", projectsController.getProjects);

module.exports = router;
