import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink is a special version of Link that can add extra styling attributes to the rendered element if it matches the current URL.

import './NavLinks.css';

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    );

};

export default NavLinks;