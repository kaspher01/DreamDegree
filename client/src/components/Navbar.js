import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="site-title">DreamDegree</a>
            <ul>
                <li><a href="/">Strona domowa</a></li>
                <li><a href="/academies">Lista uczelni</a></li>
                <li><a href="/register">Zarejestruj się</a></li>
                <li><a href="/login">Zaloguj się</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;