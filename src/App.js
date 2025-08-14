import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./features/projects/Projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "projects", element: <Projects /> },
			{ path: "aboutme", element: <AboutMe /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
