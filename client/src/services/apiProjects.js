import axios from "axios";
import { URL } from "../constants";

const url = URL + "/api/v1/projects";

export async function getProjects() {
    const response = await axios(url);

    if (!response) throw new Error("Couldn't fetch projects");

    return response;
}

export async function updateProject(id, updatedProject) {
    const response = await axios({
        method: "patch",
        url: `${url}/${id}`,
        data: updatedProject,
        withCredentials: true,
    });

    if (!response) throw new Error("Couldn't update project");

    return response;
}

export async function createProject(projectObj) {
    const response = await axios({
        method: "post",
        url: url,
        data: projectObj,
        withCredentials: true,
    });

    if (!response) throw new Error("Couldn't create project");

    return response;
}

export async function deleteProject(id) {
    const response = await axios({
        method: "delete",
        url: `${url}/${id}`,
        withCredentials: true,
    });

    if (!response) throw new Error("Couldn't delete project");

    return response;
}
