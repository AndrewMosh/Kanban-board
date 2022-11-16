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
  const handleArrow = () => {
    const arrowToggle = down.isOn
      ? setUp({ src: arrowUp, isOn: false, visibility: "visible" })
      : setUp({ src: arrowDown, isOn: true, visibility: "" });
    return arrowToggle;
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Awesome Kanban Board</h1>
        <nav className="tooltip" style={{ visibility: down.visibility }}>
          <img onClick={handleArrow} className="avatar" src={avatar} alt="" />

          <ul className="tooltiptext" style={{ visibility: down.visibility }}>
            <li className="links">Profile</li>
            <li className="links">Log out</li>
          </ul>
          <img
            className="down-arrow"
            src={down.src}
            alt=""
            onClick={handleArrow}
          />
        </nav>
      </div>
    </div>
  );
}
