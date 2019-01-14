import React from 'react';
import styles from './style.css';
import PictureOfMe from './PictureOfMe.jpg';

const About = () => {
    return(
        <div className="about-page">
            <h1>About Me</h1>
            <div className="bottom-wrapper">
                <div className="info">
                    <div className="text-wrapper">
                        <h2>Professional Development</h2>
                        <p>I am currently pursuing a Bachelor of Science degree in Computer
                            Engineering with a minor in economics, and I am expected to graduate in 2021.  I have a job
                            as an Undergraduate tutor.  In my free time I study fullstack development so that one day I will be able 
                            to create more web apps; in hopes to improve my day to day life, as well
                            as that of others.  The current tools I am learning to use are
                            React (which was used to make this website), express.js, and mongodb.</p>
                    </div>
                    <div className="smaller-info">
                        <div className="text-wrapper">
                            <h2>Hobbies and Free Time</h2>
                            <p>In my free time you will commonly find me immersing myself in my hobbies, of which the
                                largest two are studying Chinese and playing guitar.  I am also a member of
                                Iowa State’s Robotics Club.</p>
                        </div>
                        <div className="text-wrapper">
                            <div className="end-wrapper">
                                <h2>Contact Me</h2>
                                <p>Email:</p>
                                <a href = "mailto: mnphipps98@gmail.com">mnphipps98@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={PictureOfMe} alt="Picture of me" />
            </div>
        </div>
    );
}

export default About