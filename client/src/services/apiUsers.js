import axios from "axios";

// const URL = "http://localhost:4000/api/v1/users";
const URL = "https://portfolio-meab.onrender.com/api/v1/users";

export async function userIsAuthenticated() {
    const response = await axios(`${URL}/check`, { withCredentials: true });

    if (!response) throw new Error("Oops! User Authentication Went Wrong!");

    return response;
}

export async function loginUser(name, password) {
    const response = await axios({
        url: `${URL}/login`,
        method: "post",
        data: { name, password },
        withCredentials: true,
    });

    if (!response) throw new Error("Oops! Some issues occurred with user login.");

    return response;
}

export async function signupUser(name, password) {
    const response = await axios({
        url: `${URL}/create`,
        method: "post",
        data: {
            name,
            password,
        },
        withCredentials: true,
    });

    if (!response) throw new Error("Oops! Some issues occurred with user signup.");

    return response;
}
