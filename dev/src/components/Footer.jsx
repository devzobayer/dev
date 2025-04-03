import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Muhammad Zobayer. All rights reserved.</p>
                <p>This website is under construction. Stay tuned for updates!</p>
                <p>Technologies used: MERN Stack (MongoDB, Express, React, Node.js)</p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/devzobayer" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/devzobayer" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/devzobayer" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;