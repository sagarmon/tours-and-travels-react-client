import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="bg-img">
            <div className="container">
                <h1 className="mb-5">Welcome to Sagar's Healthcare</h1>
                <h3>Sagar's Healthcare is a personal training and wellness company <br /> in Sydney, NSW founded in 2005 by Sagar Sarkar.</h3>

                <h3 className="mb-5">Yes, there’s a gym on Haymarket in Sydney, the very cool <br /> Warehouse Block area of town—but it’s not a typical gym. Sagar's <br /> Healthcare Hub is all about one-on-one sessions.</h3>

                <hr />

                <h5 className="m-5">No membership fees. No contracts. Just individual attention, one session at a time, with your experienced and educated personal trainer. Your training sessions at Sagar's Healthcare Hub are specifically designed for you: your body, your health and fitness goals, your lifestyle, your time, your budget.</h5>

                <h3 className="last-part">Sagar's Healthcare Hub is the longest-standing facility of its kind <br /> in Central Kentucky. Come see why trainers and clients alike appreciate the attention to safety, cleanliness, professionalism, and health and wellness.</h3>
            </div>
        </div>
    );
};

export default About;