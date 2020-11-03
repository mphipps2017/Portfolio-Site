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
                            Engineering with a minor in economics, and am expected to graduate in May 2021.  
                            In my free time I study full-stack development and user experience design so that one day I will be able 
                            to create more web apps; in hopes to improve my day to day life, as well
                            as that of others.  The current tools I am learning to use are
                            React.js (which was used to make this website), express.js,  mongodb, and figma.</p>
                    </div>
                    <div className="smaller-info">
                        <div className="text-wrapper">
                            <h2>Career Goals</h2>
                            <p>My career goals are currently to work full-time while I develop a network of connections 
                                and a diverse skill set that I can leverage throughout my life.  I hope that this dedication
                                to improving my own abilities can be of benefit to me, the people I work with, and the
                                people I work for throughout my life.
                            </p>
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