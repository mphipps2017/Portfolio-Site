import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import styles from './style.css';

const Navbar = (props) => {
    return(
        <nav>
            <div className="nav-links">
                <Link style={{textDecoration:'none'}} to='/'>
                    <div className={"link" + (props.location.pathname === "/" ? " active": "")}>Home</div>
                </Link>
                <Link to='/about'>
                    <div className={"link" + (props.location.pathname === "/about" ? " active": "")}>About</div>
                </Link>
                <Link to='/projects'>
                    <div className={"link" + (props.location.pathname === "/projects" ? " active": "")}>Projects</div>
                </Link>
                <Link to='/reflections'>
                    <div className={"link" + (props.location.pathname === "/reflections" ? " active": "")}>Reflections</div>
                </Link>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);