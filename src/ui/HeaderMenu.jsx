import { useNavigate } from "react-router";
import styled from "styled-components";

import DarkModeToggle from "./DarkModeToggle";
import ButtonIcon from "./ButtonIcon";
import { HiAcademicCap, HiOutlineCollection, HiOutlineUser } from "react-icons/hi";

const StyledHeaderMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.8rem;

    transition: transform 0.3s;

    &:hover {
        transform: translate(5%, -8%);
    }
`;

function HeaderMenu() {
    const navigate = useNavigate();

    return (
        <StyledHeaderMenu>
            <li>
                <ButtonIcon onClick={() => navigate("/projects")}>
                    <HiOutlineCollection />
                </ButtonIcon>
            </li>
            <li>
                <ButtonIcon onClick={() => navigate("/skills")}>
                    <HiAcademicCap />
                </ButtonIcon>
            </li>
            <li>
                <ButtonIcon onClick={() => navigate("/aboutme")}>
                    <HiOutlineUser />
                </ButtonIcon>
            </li>
            <li>
                <DarkModeToggle />
            </li>
        </StyledHeaderMenu>
    );
}

export default HeaderMenu;
