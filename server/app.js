const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const projectsRouter = require("./routers/projectsRouter");
const userRouter = require("./routers/userRouter");

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://portfolio-frontend-8zee.onrender.com"];

app.use(
    cors({
        origin: (origin, callback) => {
            try {
                if (!origin) return callback(null, true);
                if (allowedOrigins.includes(origin.toLowerCase())) return callback(null, true);

                return callback(new Error(`CORS: ${origin} not allowed.`));
            } catch (err) {
                return callback(err);
            }
        },
        credentials: true,
    })
);

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(bodyParser.json({ limit: "100kb" }));
app.use(cookieParser());

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
