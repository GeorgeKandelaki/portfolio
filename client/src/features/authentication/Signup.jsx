import { useState } from "react";
import Button from "../../ui/Button";
import { useUser } from "../../context/userContext";

function Signup() {
    const { createUser, isLoading } = useUser();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        createUser(name, password);
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
                <Button>{isLoading ? "Creating..." : "Submit Form"}</Button>
            </div>
        </form>
    );
}

export default Signup;
