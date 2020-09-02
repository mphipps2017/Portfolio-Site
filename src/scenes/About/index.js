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
                            Engineering with a minor in economics, and I am expected to graduate in May 2021.  
                            In my free time I study full-stack development and user experience design so that one day I will be able 
                            to create more web apps; in hopes to improve my day to day life, as well
                            as that of others.  The current tools I am learning to use are
                            React.js (which was used to make this website), express.js,  mongodb, and figma.</p>
                    </div>
                    <div className="smaller-info">
                        <div className="text-wrapper">
                            <h2>Hobbies and Free Time</h2>
                            <p>In my free time you will commonly find me immersing myself in my hobbies, which primarily consists of 
                                cooking, studying Mandarin Chinese, playing guitar, and playing video games.  I am also a board memeber 
                                of the Iowa State Chinese Language club.
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