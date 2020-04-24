import React from 'react';
import styles from './style.css';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
    state = {
        redirect: false
    }
    handleClick = () => {
        this.setState({
            redirect: true
        });
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/about' />
        }
    }
    render(){
        return(
            <div className="home">
                <div className="title-flex">
                    <h1>Matthew Phipps</h1>
                    <p>Student, Developer, Innovator</p>
                </div>
                <div className="wrapper">
                    <div className="about-me">
                        <h2>A Little About Me</h2>
                        <p>My name is Matthew Phipps. I am a Computer Engineering major at Iowa State
                        University, currently pursuing my 7th semester.  When not in school, you can commonly
                        find me working on my latest website, studying chinese, or playing guitar.</p>
                        {this.renderRedirect()}
                        <button onClick={this.handleClick}>More About Me</button>
                    </div>
                    <div className="current">
                        <h2>Current Work and Projects</h2>
                        <p>TODO App</p>
                        <p>IEEE 4 Year Planner</p>
                        <p>IMDB Sentiment Classifaction Network</p>
                        <a href={'https://docs.google.com/document/d/1sMM6LWRl5mQvP4A97-UamPCMjO13QN7P4pUqvQsoEdM/edit?usp=sharing'}>Check out my Resume</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home