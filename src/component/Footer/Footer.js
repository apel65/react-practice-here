import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
       <div>
        <div className="footer-container">
            <h2>Contact With Us:</h2>
            <input type="text" placeholder="Enter your name"/>
            <br/>
            <input type="email" placeholder="Enter your email"/>
            <br/>
            <textarea cols="30" rows="5" placeholder="Enter your comment........."></textarea>
            <br/>
            <button className="footer-btn">Sent</button>
        </div>
        <div className="scnd-footer">
            <p>&copy; All right reserved by Arhm Apel</p>
        </div>
       </div>
    );
};

export default Footer;