const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const projectsRouter = require("./routers/projectsRouter");
const userRouter = require("./routers/userRouter");

const app = express();

app.use(cors());
app.use(cookieParser());

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
