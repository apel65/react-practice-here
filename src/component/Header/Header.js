import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""/>

            <nav className="navbar">
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact</a>
             </nav>
        </div>
    );
};

export default Header;