import React, { useState, useEffect } from 'react';
import './Home.css';
import mongoIcon from '../assets/MongoDB.svg'; // MongoDB icon
import expressIcon from '../assets/express.png'; // Express.js icon
import reactIcon from '../assets/react.svg'; // React icon
import nodeIcon from '../assets/node.png'; // Node.js icon
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    const closePopup = () => {
        setShowPopup(false); // Hide the popup when the close button is clicked
    };

    return (
        <div className="home">
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>🚧 Website under construction, not yet complete. 🚀</p>
                        <button className="close-popup" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            <section className="profile-section text-center">
                <img
                    src="https://avatars.githubusercontent.com/u/175312539"
                    alt="Profile of Muhammad Zobayer"
                    className="profile-picture"
                />
                <br />
                <h1 className="profile-name">Muhammad Zobayer</h1>
                <p className="profile-description">
                    A passionate MERN stack developer crafting seamless and engaging web experiences.
                </p>
                <p className="website-status ">
                    🚧 Website under construction... Exciting updates are on the way! 🚀
                </p>
                <p className="call-to-action">
                    Join me on this journey of innovation and creativity. Feedback and collaboration are always welcome!
                </p>
            </section>

            <section className="logo-container">
                <h2 className="technologies-heading">Technologies I Love</h2>
                <div className="logos">
                    <img src={mongoIcon} alt="MongoDB Logo" className="tech-logo" title="MongoDB" />
                    <img src={expressIcon} alt="Express.js Logo" className="tech-logo" title="Express.js" />
                    <img src={reactIcon} alt="React Logo" className="tech-logo" title="React" />
                    <img src={nodeIcon} alt="Node.js Logo" className="tech-logo" title="Node.js" />
                </div>
            </section>
        </div>
    );
};

export default Home;