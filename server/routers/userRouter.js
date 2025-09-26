const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/login", authController.login);
router.post("/create", authController.signup);

router.use("/check", authController.checkLoggedIn);

router.use(authController.protect);

module.exports = router;
