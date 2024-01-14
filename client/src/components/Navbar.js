import React from 'react';
import { Link } from 'react-router-dom';
import useToken from "./LoginComponent/UseToken";

const Navbar = () => {
    const { token, setToken } = useToken();

    return (
        <nav className="navbar">
            <Link to="/" className="site-title">DreamDegree</Link>
            <ul>
                <li><Link to="/">Strona domowa</Link></li>
                <li><Link to="/academies">Lista uczelni</Link></li>
                {token ? <li><Link to="/favourites">Ulubione uczelnie</Link></li> : null}
                <li><Link to="/register">Zarejestruj się</Link></li>
                {token ? <li><Link to="/logout">Wyloguj się</Link></li> : <li><Link to="/login">Zaloguj się</Link></li>}
            </ul>
        </nav>
    )
}
export default Navbar;