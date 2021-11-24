import { Link } from "react-router-dom";

const Navbar = () => {


    return(
        <header className="mobileNav">
        <div className="navbar">
            <div className="container flex">
            <li className="logo md">Logo.</li>
                <nav>
                    <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li className="adminLink"> <Link to="/admin">Blog Articles</Link></li>
                    <li className="memberLink"> <Link to="/member">Contact Me</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Navbar;