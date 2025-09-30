import axios from "axios";

const URL = "http://localhost:4000/api/v1/projects";

export async function getProjects() {
    const response = await axios(URL);

    if (!response) throw new Error("Couldn't fetch projects");

    return response;
}

export async function updateProject(id) {}

export async function createProject(project) {}

export async function deleteProject(id) {}
