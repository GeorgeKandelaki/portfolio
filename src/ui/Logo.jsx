import { Link } from "react-router";
import styled from "styled-components";

const StyledLogo = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 2.4rem;
`;

function Logo() {
    return <StyledLogo to="/">Home</StyledLogo>;
}

export default Logo;
