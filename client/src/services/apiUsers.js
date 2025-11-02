import axios from "axios";
import { URL } from "../constants";

const url = URL + "/api/v1/users";
export async function userIsAuthenticated() {
    const response = await axios(`${url}/check`, { withCredentials: true });

    if (!response) throw new Error("Oops! User Authentication Went Wrong!");

    return response;
}

export async function loginUser(name, password) {
    const response = await axios({
        url: `${url}/login`,
        method: "post",
        data: { name, password },
        withCredentials: true,
    });

    if (!response) throw new Error("Oops! Some issues occurred with user login.");

    return response;
}

export async function signupUser(name, password) {
    const response = await axios({
        url: `${url}/create`,
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
