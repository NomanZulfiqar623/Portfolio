import React from 'react';
// import "./Workcardstyle.css";
// import pro1 from "../assets/project 1.jpeg"
// import pro2 from "../assets/pro 2.png"
// import pro3 from "../assets/pro 3.png"
import { NavLink } from 'react-router-dom';

const Workcard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="img" />
            <h2 className='project-title'>{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>


    )
}

export default Workcard