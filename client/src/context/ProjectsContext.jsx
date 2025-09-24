import { createContext, useCallback, useContext, useReducer } from "react";
import { getProjects as getProjectsApi } from "../services/apiProjects";
import toast from "react-hot-toast";

const initialState = {
    projects: [],
    isLoading: true,
};

function reducer(state, action) {
    switch (action.type) {
        case "projects/fetched":
            return { ...state, projects: action.payload };

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

    return <ProjectsContext.Provider value={{ projects, isLoading, getProjects }}>{children}</ProjectsContext.Provider>;
}

function useProjects() {
    const context = useContext(ProjectsContext);

    if (context === undefined) throw new Error("ProjectsContext was used outside of the scope of ProjectsProvider");

    return context;
}

export { ProjectsProvider, useProjects };
