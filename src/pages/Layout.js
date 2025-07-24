//navigation menu
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="Link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="Link" to="/game">Game</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
