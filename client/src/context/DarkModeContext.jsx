import { createContext, useEffect, useContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("isDarkMode") === "true";
    });

    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add("dark-mode");
                document.documentElement.classList.remove("light-mode");
            } else {
                document.documentElement.classList.add("light-mode");
                document.documentElement.classList.remove("dark-mode");
            }
        },
        [isDarkMode]
    );

    function toggleDarkMode() {
        setIsDarkMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("isDarkMode", newValue);
            return newValue;
        });
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (context === undefined)
        throw new Error("DarkModeContext was consumed/used outside of the scope of DarkModeProvider!");

    return context;
}

export { DarkModeProvider, useDarkMode };
