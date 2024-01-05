import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="home">
                <Link to="/">Strona domowa</Link>
            </div>
            <div className="academies">
                <Link to="/academies">Lista uczelni</Link>
            </div>
            <div className="register">
                <Link to="/register">Zarejestruj się</Link>
            </div>
        </div>
    )
}

export default Navbar;