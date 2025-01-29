import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useScreenDetector } from '../hooks/useScreenDetector';
import { Paths } from '../utils/enums/Paths';
import { FaCocktail } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { RiTestTubeFill } from "react-icons/ri";
import clsx from 'clsx';

const Header = () => {

  const {isMobile} = useScreenDetector();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-10 bg-base-300 text-base-content p-4">
      <nav>
        <ul className="grid grid-cols-6 lg:flex lg:gap-4 justify-center items-center text-center">

          <li>
          {( (isMobile && (location.pathname === Paths.RULES)) &&
              <label
                htmlFor="my-drawer"
                className="btn drawer-button"
              >
                <RxHamburgerMenu />
              </label>
          )}
          </li>

          <li>
            <Link to="/" className="hover:underline">
              {isMobile ? (<button className={clsx("btn btn-accent", {"btn-secondary": location.pathname === Paths.INDEX})}><FaCocktail size={20}/></button>) : ("Nuova partita")}
            </Link>
          </li>
          <li>
            <Link to="/rules" className="hover:underline">
            {isMobile ? (<button className={clsx("btn", {"btn-secondary": location.pathname === Paths.RULES})}><IoDocumentText size={20}/></button>) : ("Regolamento")}
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="hover:underline">
            {isMobile ? (<button className={clsx("btn", {"btn-secondary": location.pathname === Paths.FEEDBACK})}><MdFeedback size={20}/></button>) : ("Feedback")}
            </Link>
          </li>
          <li
            className="cursor-not-allowed brightness-50 tooltip tooltip-bottom"
            data-tip="Coming soon"
          >
            {isMobile ? (<button className="btn"><RiTestTubeFill size={20}/></button>) : ("Bata Testing")}
          </li>
          {/* <li className="align-self-end"><ThemeSwitcher /></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
