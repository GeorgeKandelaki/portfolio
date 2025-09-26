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
import { UserProvider } from "./context/userContext";
import ProtectRoute from "./features/authentication/ProtectRoute";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <UserProvider>
                    <DarkModeProvider>
                        <ProjectsProvider>
                            <Routes>
                                <Route element={<AppLayout />}>
                                    <Route index element={<Home />} />

                                    <Route path="projects" element={<Projects />} />
                                    <Route path="projects/:projectId" element={<Project />} />
                                    <Route path="skills" element={<Skills />} />
                                    <Route path="aboutme" element={<AboutMe />} />
                                    <Route path="login" element={<Login />} />
                                </Route>

                                {/* <Route element={<ProtectRoute />}> */}
                                <Route path="signup" element={<Signup />} />
                                {/* </Route> */}
                            </Routes>
                        </ProjectsProvider>
                    </DarkModeProvider>
                </UserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
