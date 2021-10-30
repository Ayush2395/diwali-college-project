import React from "react";
import { Link } from "react-router-dom";
import diya from "../components/img/diya.png";

export default function Greet() {
  return (
    <div>
      <div className="container">
        <h1>Welcome</h1>
        <img className='diya' src={diya} width="300" alt="diya" />
        <p className="para1">We are</p>
        <h2>CSE</h2>
        <p className="para2">5th Semester</p>
        <button>
          <Link to="/diwali">Say Green To...</Link>
        </button>
      </div>

      <div className="effects">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
      </div>
    </div>
  );
}
