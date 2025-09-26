import { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault;
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
        </form>
    );
}

export default Signup;
