import { createContext, useCallback, useContext, useReducer } from "react";
import { getProjects as getProjectsApi } from "../services/apiProjects";
import toast from "react-hot-toast";

const initialState = {
    projects: [],
    isLoading: true,
};

function reducer(state, action) {
    switch (action.type) {
        case "projects/get":
            return { ...state, projects: action.payload };

        case "projects/loading":
            return { ...state, isLoading: true };
        case "projects/finished":
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

            const projects = await getProjectsApi();
            console.log(projects);
        } catch (err) {
            toast.error(err.message);
        } finally {
            dispatch({ type: "projects/finished" });
        }
    }, []);

    return <ProjectsContext.Provider value={{ projects, isLoading, getProjects }}>{children}</ProjectsContext.Provider>;
}

function useProjects() {
    const context = useContext(ProjectsContext);

    if (context === undefined) throw new Error("ProjectsContext was used outside of the scope of ProjectsProvider");

    return context;
}

export { ProjectsProvider, useProjects };
