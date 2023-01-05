import styled from "@emotion/styled";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import NavBarItem from "./navbarItem";

const NavbarC = styled("div")`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;

function Navbar() {
  const optionIcon = {
    home: <HiHome />,
    user: <FiUser />,
    history: <RxCounterClockwiseClock />,
  };
  return (
    <NavbarC>
      <NavBarItem to={"/"} icon={optionIcon.home} stroke={1} />
      <NavBarItem to={"profile"} icon={optionIcon.user} stroke={1.5} />
      <NavBarItem to={"profile/edit"} icon={optionIcon.history} />
    </NavbarC>
  );
}

export default Navbar;
