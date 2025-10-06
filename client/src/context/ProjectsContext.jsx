import { createContext, useCallback, useContext, useEffect, useReducer } from "react";
import {
    getProjects as getProjectsApi,
    createProject as createProjectApi,
    deleteProject as deleteProjectApi,
    updateProject as updateProjectApi,
} from "../services/apiProjects";
import toast from "react-hot-toast";

const initialState = {
    projects: null,
    isLoading: true,
};

function reducer(state, action) {
    switch (action.type) {
        case "projects/fetched":
            return { ...state, projects: action.payload };
        case "projects/created":
            return { ...state, projects: [...state.projects, action.payload] };
        case "projects/deleted":
            return { ...state, projects: state.projects.filter((project) => project._id !== action.payload) };
        case "projects/updated": {
            console.log(action);
            return {
                ...state,
                projects: [
                    ...state.projects.filter((project) => project._id !== action.payload.id),
                    action.payload.updatedObj,
                ],
            };
        }

        case "projects/loading":
            return { ...state, isLoading: true };
        case "projects/loaded":
            return { ...state, isLoading: false };

        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const ProjectsContext = createContext();

function ProjectsProvider({ children }) {
    const [{ projects, isLoading }, dispatch] = useReducer(reducer, initialState);

    const getProjects = useCallback(async function getProjects() {
        try {
            dispatch({ type: "projects/loading" });

            const response = await getProjectsApi();
            const { data } = response;

            if (data.status !== "Success") return toast.error("Oops! Projects couldn't be loaded. ");

            dispatch({ type: "projects/fetched", payload: data.data.projects });
        } catch (err) {
            toast.error(err.message);
        } finally {
            dispatch({ type: "projects/loaded" });
        }
    }, []);

    const createProject = useCallback(async function (projectObj) {
        try {
            dispatch({ type: "projects/loading" });
            const response = await createProjectApi(projectObj);
            const { data } = response;

            if (data.status !== "Success") return toast.error("Oops! Couldn't create a Project.");

            dispatch({ type: "projects/created", payload: data.data.project });
            toast.success("Project Successfully Created!");
        } catch (err) {
            console.error(err);
        } finally {
            dispatch({ type: "projects/loaded" });
        }
    }, []);

    const updateProject = useCallback(async function (id, updateProjectData) {
        try {
            dispatch({ type: "projects/loading" });
            const response = await updateProjectApi(id, updateProjectData);
            const { data } = response;

            if (data.status !== "Success") return toast.error("Oops! Couldn't update the project.");

            dispatch({ type: "projects/updated", payload: { id, updatedObj: data.data.project } });
            toast.success("Project successfully updated.");
        } catch (err) {
            console.error(err);
        } finally {
            dispatch({ type: "projects/loaded" });
        }
    }, []);

    const deleteProject = useCallback(async function (id) {
        try {
            dispatch({ type: "projects/loading" });

            const response = await deleteProjectApi(id);
            const { data } = response;

            if (data.status !== "Success") return toast.error("Oops! Couldn't delete this project!");

            dispatch({ type: "projects/deleted", payload: id });
            toast.success("Project Successfully Deleted.");
        } catch (err) {
            console.error(err);
        } finally {
            dispatch({ type: "projects/loaded" });
        }
    }, []);

    useEffect(
        function () {
            if (!projects) getProjects();
        },
        [getProjects, projects]
    );

    return (
        <ProjectsContext.Provider
            value={{ projects, isLoading, getProjects, updateProject, deleteProject, createProject }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}

function useProjects() {
    const context = useContext(ProjectsContext);

    if (context === undefined) throw new Error("ProjectsContext was used outside of the scope of ProjectsProvider");

    return context;
}

export { ProjectsProvider, useProjects };
