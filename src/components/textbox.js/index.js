import React from 'react';
import styles from './style.css';

const Textbox = (props) => {
    return(
        <div className="textbox">
            <h1>props.header</h1>
            <p>props.bodyText</p>
        </div>
    );
}