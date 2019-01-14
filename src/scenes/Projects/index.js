import React from 'react';
import styles from './style.css';
import Project from '../../components/Project/index.js';
import LEDc from './ProjectImgs/LEDc.png';
import TrafficLight from './ProjectImgs/TrafficLight.png';

const Projects = () => {
    return(
        <div className="projects-page">
            <div className="title-wrapper">
                <h1>Projects</h1>
            </div>
            <div className="project-list">
                <Project link={'https://docs.google.com/document/d/1kblGfuKmfC_O8xDEY9zJQJu3-WiB2PyvPPwlJ8jYkL8/edit?usp=sharing'} 
                img={LEDc} title={'6x6x6 LED cube'}/>
                <Project link={'https://docs.google.com/document/d/14DP8Su6GCeWw4i8dJkK7A-YdldkkI9nM46zg0oFyi9Y/edit?usp=sharing'}
                img={TrafficLight} title={'Smart Traffic Light System'}/>
            </div>
        </div>
    );
}

export default Projects