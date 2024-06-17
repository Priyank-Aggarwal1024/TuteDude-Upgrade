import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <NavLink to="/" className="nav-logo">
                    <img src={Logo} className='va-mid logo-large' alt="Logo" />
                    <img src={Logo2} className='va-mid logo-small' alt="Logo" />
                </NavLink>
            </div>
            <div className="nav-btn">
                <NavLink className="nav-login-btn">Login </NavLink>
                <NavLink className="nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;