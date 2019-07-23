import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            {"|"}
            <NavLink to="/aboutus">About Us</NavLink>
            {"|"}
            <NavLink to="/courses">Course</NavLink>
        </nav>
    );
}

export default Header;