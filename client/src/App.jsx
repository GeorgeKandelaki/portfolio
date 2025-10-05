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
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <GlobalStyles />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: "",
                    duration: 5000,
                    removeDelay: 1000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: "green",
                            secondary: "black",
                        },
                    },
                }}
            />
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

                                    <Route element={<ProtectRoute />}>
                                        <Route path="signup" element={<Signup />} />
                                    </Route>
                                </Route>
                            </Routes>
                        </ProjectsProvider>
                    </DarkModeProvider>
                </UserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
