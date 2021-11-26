import { Link } from "react-router-dom";

const Navbar = () => {


    return(
        <header className="mobileNav">
        <div className="navbar">
            <div className="container flex">
            <li className="logo md">Logo.</li>
                <nav>
                    <ul>
                    <li className="adminLink"> <Link to="/admin">Admin</Link></li>
                    <li className="memberLink"> <Link to="/member">Member</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Navbar;