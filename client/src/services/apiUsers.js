import axios from "axios";

const URL = "http://localhost:4000/api/v1/users";

export async function userIsAuthenticated() {
    const response = await axios(`${URL}/check`);

    if (!response) throw new Error("Oops! User Authentication Went Wrong!");

    return response;
}

export async function loginUser() {}

export async function signupUser() {}
