import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Muhammad Zobayer. All rights reserved.</p>
            <p>This website is under construction. Stay tuned for updates!</p>
            <p>Technologies used: MERN Stack (MongoDB, Express, React, Node.js)</p>
        </footer>
    );
};

export default Footer;