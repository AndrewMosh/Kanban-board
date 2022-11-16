import React from "react";
import css from "./button.module.css";

export const Button = ({ isActive, setActive, card, handleButton }) => {
  return (
    <>
      {(isActive && card.title === "Backlog" && (
        <button className={css.submit} onClick={handleButton}>
          Submit
        </button>
      )) || (
        <button className={css.add} onClick={() => setActive(true)}>
          + add card
        </button>
      )}
    </>
  );
};
