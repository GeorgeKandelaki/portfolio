const axios = require("axios");
const Project = require("../models/projectModel");
const mongoose = require("mongoose");

const URL = "https://www.frontendmentor.io/api/v3/learners/6506d5737b9455f829e62ca7/solutions";

function filterObj(obj, fieldsToFilter) {
    const bufferObj = {};

    for (const [key, value] of Object.entries(obj)) if (fieldsToFilter.includes(key)) bufferObj[key] = value;

    return bufferObj;
}

async function getFrontEndMentorData() {
    const res = await axios.get(URL);
    const data = res.data.data;
    const projects = [];

    for (let i = 0; i < data.length; i++) {
        projects[i] = filterObj(data[i], ["liveURL", "repoURL", "screenshot", "title", "challenge"]); // retrospective
    }

    return projects;
}

async function uploadFrontendMentorData() {
    const projects = await getFrontEndMentorData();

    console.log(projects[0]);
    for (let i = 0; i < projects.length; i++) {
        const {
            liveURL,
            repoURL,
            title,
            screenshot,
            challenge: { languages },
        } = projects[i];

        await Project.create({
            liveURL,
            repoURL,
            title,
            screenshot,
            toolsUsed: languages.map((item) => item.toLowerCase()),
            difficulty: Math.ceil(Math.random() * 4),
        });
    }

    return null;
}

async function main() {
    try {
        // <-- make sure this is correct
        await mongoose.connect(
            "mongodb+srv://kandelakig29_db_user:FWQbdCDJfY9dEoXf@portfolio.lb7rxb6.mongodb.net/?retryWrites=true&w=majority&appName=portfolio",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB connected");

        await uploadFrontendMentorData();

        console.log("Data upload complete");
        await mongoose.disconnect();
    } catch (err) {
        console.error("Error:", err);
    }
}

main();
