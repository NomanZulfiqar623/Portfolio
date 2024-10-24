import "./Aboutcontentstyle.css";

import React from "react";
import { Link } from "react-router-dom";
import react from "../assets/react.jpg";
import react2 from "../assets/images.jpeg";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front-end-developer. I Create responsive secure website for
          my Projects
        </p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react} className="img1" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img2" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
