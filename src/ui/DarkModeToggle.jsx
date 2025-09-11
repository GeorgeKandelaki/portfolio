import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
    const [toggleDarkMode, isDarkMode] = ["", ""];

    return <ButtonIcon onClick={toggleDarkMode}>{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}</ButtonIcon>;
}

export default DarkModeToggle;
