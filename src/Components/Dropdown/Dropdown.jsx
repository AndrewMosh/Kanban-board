import React from "react";
import css from "../Button/button.module.css";
import styles from "./select.module.css";

export const Dropdown = ({
  backlog,
  moveTask,
  card,
  ready,
  progress,
  activeSelect,
  setSelect,
}) => {
  //управляем состоянием каждого select
  const handleSelect = () => {
    if (card.id === 2) {
      setSelect({
        ready: false,
        progress: true,
        finished: true,
        active: true,
      });
    }
    if (card.id === 3) {
      setSelect({
        ready: true,
        progress: false,
        finished: true,
        active: false,
      });
    }
    if (card.id === 4) {
      setSelect({
        ready: true,
        progress: true,
        finished: false,
        active: false,
      });
    }
  };

  let content = null;

  if (card.title === "Ready") {
    if (backlog.length === 0 && activeSelect.ready) {
      content = (
        <button
          className={css.add}
          key={card.id}
          onClick={handleSelect}
          disabled
        >
          + add card
        </button>
      );
    } else if (!activeSelect.ready) {
      content = (
        <div>
          <select
            className={styles.select}
            onChange={(e) => moveTask(e.target.value, backlog)}
            multiple
          >
            {backlog.map((bitch) => (
              <option
                className={styles.option}
                key={bitch.id}
                value={bitch.name}
              >
                {bitch.name}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      content = (
        <button className={css.add} key={card.id} onClick={handleSelect}>
          + add card
        </button>
      );
    }
  } else if (card.title === "In progress") {
    if (ready.length === 0 && activeSelect.progress) {
      content = (
        <button
          className={css.add}
          key={card.id}
          onClick={handleSelect}
          disabled
        >
          + add card
        </button>
      );
    } else if (!activeSelect.progress) {
      content = (
        <select
          className={styles.select}
          onChange={(e) => moveTask(e.target.value, ready)}
          multiple
        >
          {ready.map((bitch) => (
            <option className={styles.option} key={bitch.id} value={bitch.name}>
              {bitch.name}
            </option>
          ))}
        </select>
      );
    } else {
      content = (
        <button className={css.add} key={card.id} onClick={handleSelect}>
          + add card
        </button>
      );
    }
  } else if (card.title === "Finished") {
    if (progress.length === 0 && activeSelect.finished) {
      content = (
        <button
          className={css.add}
          key={card.id}
          onClick={handleSelect}
          disabled
        >
          + add card
        </button>
      );
    } else if (!activeSelect.finished) {
      content = (
        <select
          className={styles.select}
          onChange={(e) => moveTask(e.target.value, progress)}
          multiple
        >
          {progress.map((bitch) => (
            <option className={styles.option} key={bitch.id} value={bitch.name}>
              {bitch.name}
            </option>
          ))}
        </select>
      );
    } else {
      content = (
        <button className={css.add} key={card.id} onClick={handleSelect}>
          + add card
        </button>
      );
    }
  }
  return <>{content}</>;
};
