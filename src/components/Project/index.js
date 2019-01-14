import React from 'react';
import stlyes from './style.css';

const Project = (props) => {
    console.log(props);
    return(
        <div className="singleProj-container">
            <img src={props.img} alt={props.title} />
            <div className="projInfo">
                <a href={props.link} target="_blank">{props.title}</a>
            </div>
        </div>
    );
}

export default Project