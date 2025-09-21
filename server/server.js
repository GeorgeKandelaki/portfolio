const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env", debug: true, quiet: true });

const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.DB_STRING)
    .then(() => console.log("MongoDB Connected Successfully..."))
    .catch((err) => console.error(err));

app.listen(port, () => console.log(`Server Successfully Started. Listening on port ${port}...`));
