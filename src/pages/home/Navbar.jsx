import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="upg-pag-navbar">
            <div className="upg-pag-nav-left">
                <NavLink to="/" className="upg-pag-nav-logo">
                    <img src={Logo} className="upg-pag-va-mid upg-pag-logo-large" alt="Logo" />
                    <img src={Logo2} className="upg-pag-va-mid upg-pag-logo-small" alt="Logo" />
                </NavLink>
            </div>
            <div className="upg-pag-nav-btn">
                <NavLink className="upg-pag-nav-login-btn">Login </NavLink>
                <NavLink className="upg-pag-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;