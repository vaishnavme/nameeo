import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-brand">
               NameeO
            </div>
            <ul className="nav-link">
                <li className="nav-item">
                    <a target="_blank" rel="noreferrer" href="https://github.com/vaishnavme/nameeo">Github</a>
                </li>
                <li className="nav-item">
                    <a target="_blank" rel="noreferrer" href="https://www.github.com/vaishnavme">Developer</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;