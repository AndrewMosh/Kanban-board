import React from "react";
import { useState } from "react";
import "./header.css";
import arrowDown from "./Vector-closed.svg";
import arrowUp from "./Vector-open.svg";
import avatar from "./user-avatar.svg";

export default function Header(props) {
  const [down, setUp] = useState({
    src: arrowDown,
    isOn: true,
    visibility: "none",
  });
  const { src, isOn, visibility } = down; //object destructuring

  const handleArrow = () => {
    isOn
      ? setUp({ src: arrowUp, isOn: false, visibility: "visible" })
      : setUp({ src: arrowDown, isOn: true, visibility: "" });
  }; //arrow function and object shorthand syntax

  return (
    <div className="container">
      <div className="box">
        <h1>Awesome Kanban Board</h1>
        <nav className="tooltip" style={{ visibility }}>
          <img
            onClick={handleArrow}
            className="avatar"
            src={avatar}
            alt="avatar"
          />

          <ul className="tooltiptext" style={{ visibility }}>
            <li className="links">Profile</li>
            <li className="links">Log out</li>
          </ul>
          <img className="down-arrow" src={src} alt="" onClick={handleArrow} />
        </nav>
      </div>
    </div>
  );
}
