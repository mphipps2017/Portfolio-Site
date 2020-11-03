import React from 'react';
import styles from './style.css';
import Project from '../../components/Project/index.js';
import LEDc from './ProjectImgs/LEDc.png';
import TrafficLight from './ProjectImgs/TrafficLight.png';
import GlidderLogo from './ProjectImgs/GliderLogowitBack.svg';
import MIPSProcessor from './ProjectImgs/MIPS_Pipeline_Processor.PNG';
import SeniorDesign from './ProjectImgs/Senior_Design_Icon.png';

const Projects = () => {
    return(
        <div className="projects-page">
            <div className="title-wrapper">
                <h1>Projects</h1>
                <a href="https://github.com/mphipps2017">My Github</a>
                <br></br>
            </div>
            <div className="project-list">
                <Project 
                    link={'https://docs.google.com/document/d/1kblGfuKmfC_O8xDEY9zJQJu3-WiB2PyvPPwlJ8jYkL8/edit?usp=sharing'} 
                    img={LEDc}
                    title={'6x6x6 LED cube'}/>
                <Project 
                    link={'https://docs.google.com/document/d/14DP8Su6GCeWw4i8dJkK7A-YdldkkI9nM46zg0oFyi9Y/edit?usp=sharing'}
                    img={TrafficLight}
                    title={'Smart Traffic Light System'}/>
                <Project 
                    link={'https://devpost.com/software/glider'}
                    img={GlidderLogo}
                    title={'Glidder'}/>
                <Project 
                    link={'https://docs.google.com/document/d/1AEKiyJCSXXUksbP0auFJSrPEsZcgjnmad3K6vK2Q0To/edit?usp=sharing'}
                    img={MIPSProcessor} 
                    title={'MIPS Pipeline Processor'}/>
                <Project 
                    link={'https://docs.google.com/document/d/1H7m_TuYAOMR_epXvvmqLgWkDMTC5M9UpQnRgytW1hXg/edit?usp=sharing'}
                    img={SeniorDesign} 
                    title={'Senior Design Project'}/>
            </div>
        </div>
    );
}

export default Projects