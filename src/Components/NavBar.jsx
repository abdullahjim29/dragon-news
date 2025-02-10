import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
            <div id="navbar" className="space-x-6 text-gray-500 text-lg">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
    );
};

export default NavBar;