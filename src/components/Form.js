import "./Formstyle.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="" />
        <label>Massage</label>
        <textarea rows="6" placeholder="Type Your Massage here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
