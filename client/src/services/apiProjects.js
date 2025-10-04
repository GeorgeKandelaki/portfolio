import axios from "axios";

const URL = "http://localhost:4000/api/v1/projects";

export async function getProjects() {
    const response = await axios(URL);

    if (!response) throw new Error("Couldn't fetch projects");

    return response;
}

export async function updateProject(id, updatedProject) {
    const response = await axios({
        method: "patch",
        url: `${URL}/${id}`,
        data: {
            updateProject,
        },
        withCredentials: true,
    });

    if (!response) throw new Error("Couldn't update project");

    return response;
}

export async function createProject(projectObj) {
    const response = await axios({
        method: "post",
        url: URL,
        data: {
            projectObj,
        },
    });

    if (!response) throw new Error("Couldn't create project");

    return response;
}

export async function deleteProject(id) {
    const response = await axios({
        method: "delete",
        url: `${URL}/${id}`,
    });

    if (!response) throw new Error("Couldn't delete project");

    return response;
}
