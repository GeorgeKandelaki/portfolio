import { BrowserRouter, Route, Routes } from "react-router";

import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <DarkModeProvider>
                    <ProjectsProvider>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route index element={<Home />} />

                                <Route path="projects" element={<Projects />} />
                                <Route path="projects/:projectId" element={<Project />} />
                                <Route path="skills" element={<Skills />} />
                                <Route path="aboutme" element={<AboutMe />} />
                            </Route>
                        </Routes>
                    </ProjectsProvider>
                </DarkModeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
