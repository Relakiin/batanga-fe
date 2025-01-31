import { RxHamburgerMenu } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Paths } from "../utils/enums/Paths";

interface DrawerButtonProps {
  isMobile: boolean;
}

const DrawerButton: React.FC<DrawerButtonProps> = ({ isMobile }) => {
  const location = useLocation();

  if (!isMobile || (location.pathname !== Paths.RULES && location.pathname !== Paths.PLAY)) {
    return <li></li>;
  }

  return (
    <label htmlFor="my-drawer" className="btn drawer-button">
      {location.pathname === Paths.RULES ? <RxHamburgerMenu size={20}/> : <FaHistory size={20}/>}
    </label>
  );
};

export default DrawerButton;
