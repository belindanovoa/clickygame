import React from "react";
import Score from "../Score";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="start">
          <a href="/">Potato Memory Game</a>
        </li>
        <Score score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
