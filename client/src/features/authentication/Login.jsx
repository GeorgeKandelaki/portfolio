import { useState } from "react";
import Button from "../../ui/Button";
import { useUser } from "../../context/userContext";

function Login() {
    const { isLoading, loginUser } = useUser();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        loginUser(name, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name..." />
            </div>
            <div>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
            </div>

            <div>
                <Button>{isLoading ? "Loading..." : "Login"}</Button>
            </div>
        </form>
    );
}

export default Login;
