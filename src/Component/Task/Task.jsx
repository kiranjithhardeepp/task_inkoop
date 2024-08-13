import React, { useState } from "react";
import "./Task.css";
import git from "../../assets/github-dark.svg";
import { Link } from "react-router-dom";

const Task = () => {
  const [state, setState] = useState("");

  const HandleChange = (e) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      setState("Please enter a valid number");
    } else if (value < 0) {
      setState("Enter a positive value");
    } else if (value % 2 === 0) {
      setState(`Next 3 even numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    } else {
      setState(`Next 3 odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    }
  };

  return (
    <div className="task">
      <div className="taskCont">
        <div className="taskBox">
          <div className="data">
            <input type="text" className="inputTab" onChange={HandleChange} />
            <div className="output">
              <h3>{state}</h3>
            </div>
            <Link to="/">
              <div className="backcode">
                <img src={git} alt="" className="gitImg" />
                <p>code</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
