import styled from "styled-components";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.2rem 4.8rem;

    grid-column: 1 / -1;
    grid-row: 1;
`;

function Header() {
    return (
        <StyledHeader>
            <Logo />
            <HeaderMenu />
        </StyledHeader>
    );
}

export default Header;
