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
                <Reflection link={'https://drive.google.com/file/d/1dehtidAggeSgVL3uoL-pZgnpy9iuu2eg/view?usp=sharing'} title={'Ethics Reflection'}
                description={'This is a reflection on ethics I wrote for the seminar course CprE 394.  In class we had a discussion about ethics in the workplace where we evaluated both good ethics, and case studies where ethics were violated.  After lecture we were given an assignment to write a reflection on what we learned about ethics.  This is that assignment.'}/>
            </div>
        </div>
    );
}

export default Reflections