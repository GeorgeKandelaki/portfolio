import { useEffect } from "react";
import { useUser } from "../../context/userContext.jsx";
import Spinner from "../../ui/Spinner.jsx";
import LinkButton from "../../ui/LinkButton.jsx";

import { Outlet } from "react-router";

function ProtectRoute({ children }) {
    const { isLoading, isAuthenticated, checkAuthentication } = useUser();

    useEffect(
        function () {
            checkAuthentication();
        },
        [checkAuthentication]
    );

    if (isLoading) return <Spinner />;

    if (!isAuthenticated)
        return (
            <div style={{ textAlign: "center", marginTop: "10rem" }}>
                <h1 style={{ marginBottom: "2.4rem" }}>
                    Sorry, but you are forbidden to visit this Routes/Paths! (403)
                </h1>
                <LinkButton to="/">Go Home...</LinkButton>
            </div>
        );

    return <Outlet />;
}

export default ProtectRoute;
