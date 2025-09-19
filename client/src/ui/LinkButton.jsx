import { useNavigate } from "react-router";
import Button from "./Button";

function LinkButton({ to, children }) {
    const navigate = useNavigate();

    return <Button onClick={() => navigate(to)}>{children}</Button>;
}

export default LinkButton;
