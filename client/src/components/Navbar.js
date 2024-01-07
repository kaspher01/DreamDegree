import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="site-title">DreamDegree</Link>
            <ul>
                <li><Link to="/">Strona domowa</Link></li>
                <li><Link to="/academies">Lista uczelni</Link></li>
                <li><Link to="/register">Zarejestruj się</Link></li>
                <li><Link to="/login">Zaloguj się</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;