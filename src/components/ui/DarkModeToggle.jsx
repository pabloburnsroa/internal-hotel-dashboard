import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { UseDarkMode } from "../../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}
export default DarkModeToggle;
