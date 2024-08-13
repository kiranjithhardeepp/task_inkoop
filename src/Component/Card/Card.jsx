import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import git from "../../assets/github-dark.svg";
const Card = () => {
  return (
    <div className="card">
      <div className="topCard">
        <div className="cardContainer">
          <div className="taskTab">
            <Link to="/Task" className="linkTab">
              Click to see the task
            </Link>
          </div>
          <div className="code">
            <a href="https://github.com/kiranjithhardeepp/task_inkoop">
              <img src={git} alt="git hub" />
            </a>
            <p>Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
