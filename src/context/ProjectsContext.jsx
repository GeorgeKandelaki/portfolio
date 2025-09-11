import { createContext, useContext } from "react";

const ProjectsContext = createContext();

function ProjectsProvider({ children }) {
    return <ProjectsContext.Provider value={{ projects: [] }}>{children}</ProjectsContext.Provider>;
}

function useProjects() {
    const context = useContext(ProjectsContext);

    if (context === undefined) throw new Error("ProjectsContext was use outside the scope of ProjectsProvider");

    return context;
}

export { ProjectsProvider, useProjects };
