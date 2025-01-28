import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="sticky top-0 z-10 bg-base-300 text-base-content p-4">
        <nav>
          <ul className="flex space-x-4 justify-center items-center text-center">
            <li>
              <Link
                to="/"
                className="hover:underline"
              >
                Nuova partita
              </Link>
            </li>
            <li>
              <Link
                to="/rules"
                className="hover:underline"
              >
                Regolamento
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="hover:underline"
              >
                Feedback
              </Link>
            </li>
            <li className='cursor-not-allowed brightness-50 tooltip tooltip-bottom' data-tip="Coming soon">
                Bata Testing
            </li>
          </ul>
        </nav>
      </header>
     );
}
 
export default Header;