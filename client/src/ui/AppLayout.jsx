import { Outlet } from "react-router";
import styled from "styled-components";

import Header from "./Header";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 3.2rem 1fr 3.2rem;
    grid-template-rows: auto 1fr;
    background-color: var(--color-grey-50);

    height: 100%;
`;

const Main = styled.main`
    padding: 2.4rem 3.2rem;
    grid-column: 2 / 3;
    grid-row: 2;

    height: 100%;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </StyledAppLayout>
    );
}

export default AppLayout;
