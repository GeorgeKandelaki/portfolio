const express = require("express");
const cors = require("cors");

const projectsRouter = require("./routers/projectsRouter");
const userRouter = require("./routers/userRouter");

const app = express();

app.use(cors());

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
