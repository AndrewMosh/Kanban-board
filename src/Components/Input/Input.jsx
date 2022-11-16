import React from "react";
import css from "./input.module.css";

export const Input = ({
  isActive,
  val,
  handleValue,
  description,
  handleDescription,
}) => {
  return (
    <>
      {isActive && (
        <div className={css.container}>
          <input
            className={css.input}
            type="text"
            placeholder="New task title"
            value={val}
            onChange={handleValue}
          />
          <textarea
            className={css.textarea}
            value={description}
            placeholder="New task description"
            rows="5"
            cols="19"
            onChange={handleDescription}
          ></textarea>{" "}
        </div>
      )}
    </>
  );
};
