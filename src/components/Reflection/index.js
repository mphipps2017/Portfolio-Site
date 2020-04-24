import React from 'react';
import styles from './style.css';

const Reflection = (props) => {
    console.log(props);
    return(
        <div className="singleReflection-container">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.link} target="_blank">Read this Essay</a>
        </div>
    );
}

export default Reflection