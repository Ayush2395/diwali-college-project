import { Button } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
import diya from "../components/img/diya.png";

export default function Greet() {

  const history = useHistory();

  return (
    <div>
      <div className="container text-light">
        <h1>Welcome</h1>
        <img className="diya" src={diya} width="300" alt="diya" />
        <p className="para1">We are</p>
        <h2>CSE</h2>
        <p className="para2">Department</p>
        <Button onClick={()=> history.push('/diwali')}>Say Green To...</Button>
      </div>

      <div className="effects">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
      </div>
    </div>
  );
}
