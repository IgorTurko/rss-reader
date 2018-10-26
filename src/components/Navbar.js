import React from 'react';
import { NavLink }  from 'react-router-dom';

const NavbarComponent = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="data-dog">Dogdata</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to="azure">Azure</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavbarComponent;