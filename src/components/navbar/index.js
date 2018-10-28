import React from 'react';
import { withRouter, Link, NavLink }  from 'react-router-dom';
import classnames from 'classnames';
import './navbar.css';

class NavbarComponent extends React.PureComponent {
    render() {
        const { location : { pathname } } = this.props;
        
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand navbar-logo" to="/"></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className={classnames("nav-item", {active: pathname === '/data-dog'})}>
                            <NavLink className="nav-link" to="data-dog">Dogdata</NavLink>
                        </li>
                        <li className={classnames("nav-item", {active: pathname === '/azure'})}>
                            <NavLink className="nav-link" to="azure">Azure</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavbarComponent);