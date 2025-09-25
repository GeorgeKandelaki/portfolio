const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/login", authController.login);

router.use(authController.protect);
router.post("/create", authController.signup);

module.exports = router;
