import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const URL = "https://www.frontendmentor.io/api/v3/learners/6506d5737b9455f829e62ca7/solutions";

export async function getProjects() {
    const response = await axios(URL);

    if (!response) throw new Error("Couldn't fetch projects");

    return response;
}
