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
             <h2 className='header-h2 '>Website Under Construction - Will Be Hosted Soon</h2>
            <div className="timer">
                <p> {currentTime}</p>
            </div>
            <div className="hero-section">
               
                <img
                    src="https://avatars.githubusercontent.com/u/175312539" // Replace with your online image URL
                    alt="Placeholder"
                    className="online-image"
                />
                 <h1>Hi! I am <strong className='name'>Zobayer</strong></h1>
                <span>
                    A highly skilled MERN Stack Developer Expert with extensive experience in developing dynamic, scalable, and user-friendly web applications. With a strong passion for technology and problem-solving, I specialize in full-stack web development, combining both frontend and backend expertise to build seamless digital experiences.
                </span>
                <p>
                    I am currently pursuing a BBA in Marketing at National University, Bangladesh..
                </p>
            </div>
            <div className="content-section text-center">
                <h2>Technologies Used</h2>
                <p>
                    This website is built using the MERN stack, which consists of the following technologies:
                </p>
                <ul className="tech-list">
                    <li>
                        <div className="tech-item">
                            <img src={mongoIcon} alt="MongoDB" className="tech-icon" />
                            <strong>MongoDB:</strong> A NoSQL database that stores data in a flexible, JSON-like format.
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src={expressIcon} alt="Express.js" className="tech-icon" />
                            <strong>Express.js:</strong> A web application framework for Node.js that simplifies the process of building web applications.
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src={reactIcon} alt="React" className="tech-icon" />
                            <strong>React:</strong> A JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive web applications.
                        </div>
                    </li>
                    <li>
                        <div className="tech-item">
                            <img src={nodeIcon} alt="Node.js" className="tech-icon" />
                            <strong>Node.js:</strong> A JavaScript runtime that allows you to run JavaScript on the server side.
                        </div>
                    </li>
                </ul>
                <strong className='under-construction '>
                    This website is currently under construction. I am actively working on it to showcase my projects and skills in web development.
                    <br />
                    Stay tuned! This website is under construction and will soon showcase my projects and skills in web development.
                </strong>
            </div>
        </div>
    );
};

export default Home;