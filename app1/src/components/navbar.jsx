import { Link, useLocation, withRouter } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className={"nav-link " + (pathname === "/" ? "disabled" : "")} to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (pathname === "/about" ? "disabled" : "")} to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (pathname === "/contact" ? "disabled" : "")} to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (pathname === "/news" ? "disabled" : "")} to={"/news"}>News</Link>
            </li>
        </ul>
    )
}

export default Navbar;