import { useNavigate } from "react-router";
import Button from "./Button";

function LinkButton({ to, children, ...attributes }) {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(to)} {...attributes}>
            {children}
        </Button>
    );
}

export default LinkButton;
