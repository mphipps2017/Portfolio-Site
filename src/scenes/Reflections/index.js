import React from 'react';
import styles from './style.css';
import Reflection from '../../components/Reflection'

const Reflections = () => {
    return(
        <div className="reflections-page">
            <div className="title-wrapper">
                <h1>Reflections</h1>
                <br></br>
            </div>
            <div className="reflections-list">
                <Reflection 
                    link={'https://drive.google.com/file/d/1dehtidAggeSgVL3uoL-pZgnpy9iuu2eg/view?usp=sharing'} 
                    title={'Ethics Reflection'}
                    description={'This is a reflection on ethics I wrote for the seminar course CprE 394.  In class we had a discussion about ethics in the workplace where we evaluated both good ethics, and case studies where ethics were violated.  After lecture we were given an assignment to write a reflection on what we learned about ethics.  This is that assignment.'}/>
                <Reflection 
                    link={'https://drive.google.com/file/d/1NIIwVTaQA0F53lLZ1KyoP4xsUEGCSHIy/view?usp=sharing'} 
                    title={'Cumulative Reflection'}
                    description={'This is a reflection I wrote about the about the Computer Engineering curriculum at Iowa State.  It touches on some of my thoughts about the curriculum as well as what I have learned throughout my years at Iowa State University.'}/>
                <Reflection 
                    link={'https://drive.google.com/file/d/1lCbpZK5AWqRCJGKz95QGqgjmZGrHc2J8/view?usp=sharing'} 
                    title={'General Education Reflection'}
                    description={'This is a reflection on the general education courses that I have taken at Iowa State and how they have contributed to the development of my unique perspectives on engineering and the planet.'}/>
            </div>
        </div>
    );
}

export default Reflections