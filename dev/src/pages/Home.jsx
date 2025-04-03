import React, { useState, useEffect } from 'react';
import './Home.css';
import mongoIcon from '../assets/MongoDB.svg'; // MongoDB icon
import expressIcon from '../assets/express.png'; // Express.js icon
import reactIcon from '../assets/react.svg'; // React icon
import nodeIcon from '../assets/node.png'; // Node.js icon
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="home">
            <div className="logo-section text-center">
                
                <div className="logo-container">
                <h2 className='Technologies-heading'>Technologies Used</h2>
                <div className="logos">
                    <img src={mongoIcon} alt="MongoDB" className="tech-logo" />
                    <img src={expressIcon} alt="Express.js" className="tech-logo" />
                    <img src={reactIcon} alt="React" className="tech-logo" />
                    <img src={nodeIcon} alt="Node.js" className="tech-logo" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;