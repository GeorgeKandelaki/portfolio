const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env", debug: true });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Successfully Started. Listening on port ${port}...`));
