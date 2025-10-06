import { createContext, useCallback, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { signupUser, userIsAuthenticated, loginUser as loginUserApi } from "../services/apiUsers";
import { useNavigate } from "react-router";

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
            return { ...state, isAuthenticated: action.payload };
        case "user/fetched":
            return { ...state, user: action.payload };

        default:
            throw Error("Unknown action: " + action.type);
    }
}

function UserProvider({ children }) {
    const navigate = useNavigate();
    const [{ isLoading, user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

    const checkAuthentication = useCallback(async function () {
        try {
            dispatch({ type: "user/loading" });

            const response = await userIsAuthenticated();
            if (!response) return toast.error("Something went wrong!");

            const { data: data } = response;

            if (data.status !== "Success") return toast.error("Couldn't Authenticate User.");

            dispatch({ type: "user/fetched", payload: data.user });
            dispatch({ type: "user/authenticated", payload: data.isAuthenticated });
        } catch (err) {
            console.error(err);
        } finally {
            dispatch({ type: "user/loaded" });
        }
    }, []);

    const createUser = useCallback(
        async function (name, password) {
            try {
                dispatch({ type: "user/loading" });

                const response = await signupUser(name, password);
                const { data } = response;

                if (data.status !== "Success") throw new Error("Couldn't create an user");

                dispatch({ type: "user/fetched", payload: data.data.user });
                navigate("/");
            } catch (err) {
                console.error(err);
            } finally {
                dispatch({ type: "user/loaded" });
            }
        },
        [navigate]
    );

    const loginUser = useCallback(
        async function (name, password) {
            try {
                dispatch({ type: "user/loading" });
                const response = await loginUserApi(name, password);
                const { data } = response;

                if (data.status !== "Success") throw new Error("Couldn't log in the user.");

                dispatch({ type: "user/fetched", payload: data.data.user });
                navigate("/");
            } catch (err) {
                console.error(err);
            } finally {
                dispatch({ type: "user/loaded" });
            }
        },
        [navigate]
    );

    useEffect(
        function () {
            checkAuthentication();
        },
        [checkAuthentication]
    );

    return (
        <UserContext.Provider value={{ user, isLoading, isAuthenticated, checkAuthentication, createUser, loginUser }}>
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
