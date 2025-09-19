import { createContext, useContext } from "react";

const ProjectsContext = createContext();

console.log(process.env.LINK);

function ProjectsProvider({ children }) {
    return <ProjectsContext.Provider value={{ projects: [] }}>{children}</ProjectsContext.Provider>;
}

function useProjects() {
    const context = useContext(ProjectsContext);

    if (context === undefined) throw new Error("ProjectsContext was used outside of the scope of ProjectsProvider");

    return context;
}

export { ProjectsProvider, useProjects };
