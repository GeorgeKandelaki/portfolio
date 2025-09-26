import { createContext, useCallback, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import { userIsAuthenticated } from "../services/apiUsers";

const initialState = {
    isLoading: true,
    user: {},
    isAuthenticated: false,
};

const UserContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case "user/loading":
            return { ...state, isLoading: true };
        case "user/loaded":
            return { ...state, isLoading: false };
        case "user/authenticated":
            return { ...state, isAuthenticated: true };
        case "user/notAuthenticate":
            return { ...state, isAuthenticated: false };

        default:
            throw Error("Unknown action: " + action.type);
    }
}

function UserProvider({ children }) {
    const [{ isLoading, user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

    const checkAuthentication = useCallback(async function () {
        try {
            dispatch({ type: "user/loading" });

            const response = await userIsAuthenticated();
            const { data: data } = response;

            if (data.success !== "Success") return toast.error("Couldn't Authenticate User.");

            dispatch({ type: "user/authenticated" });
            console.log(data);
        } catch (err) {
            console.error(err.response.data);
        } finally {
            dispatch({ type: "user/loaded" });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoading, isAuthenticated, checkAuthentication }}>
            {children}
        </UserContext.Provider>
    );
}

function useUser() {
    const context = useContext(UserContext);

    if (context === undefined) throw new Error("UserContext was used outside of the Scope of UserProvider!");

    return context;
}

export { UserProvider, useUser };
