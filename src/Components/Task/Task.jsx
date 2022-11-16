import React from "react";
import { Link } from "react-router-dom";
import css from "./task.module.css";
export const Task = ({
  card,
  backlog,
  ready,
  progress,
  finished,
  setBacklog,
  setReady,
  setProgress,
  setFinished,
}) => {
  return (
    <>
      {(card.title === "Backlog" &&
        backlog.map((task) => {
          return (
            <div className={css.task} key={task.id}>
              <Link
                className={css.link}
                to={`/backlog/${task.id}`}
                key={task.id}
              >
                {task.name}
              </Link>
              <span
                className={css.delete}
                title="delete"
                onClick={() => {
                  let newList = backlog.filter((item) => item.id !== task.id);
                  setBacklog(newList);
                }}
              >
                &#10006;
              </span>
            </div>
          );
        })) ||
        (card.title === "Ready" &&
          ready.map((task) => {
            return (
              <div className={css.task} key={task.id}>
                <Link
                  className={css.link}
                  to={`/ready/${task.id}`}
                  key={task.id}
                >
                  {task.name}
                </Link>
                <span
                  className={css.delete}
                  title="delete"
                  onClick={() => {
                    let newList = ready.filter((item) => item.id !== task.id);
                    setReady(newList);
                  }}
                >
                  &#10006;
                </span>
              </div>
            );
          })) ||
        (card.title === "In progress" &&
          progress.map((task) => {
            return (
              <div className={css.task} key={task.id}>
                <Link
                  className={css.link}
                  to={`/progress/${task.id}`}
                  key={task.id}
                >
                  {task.name}
                </Link>
                <span
                  className={css.delete}
                  title="delete"
                  onClick={() => {
                    let newList = progress.filter(
                      (item) => item.id !== task.id
                    );
                    setProgress(newList);
                  }}
                >
                  &#10006;
                </span>
              </div>
            );
          })) ||
        (card.title === "Finished" &&
          finished.map((task) => {
            return (
              <div className={css.task} key={task.id}>
                <Link
                  className={css.link}
                  to={`/finished/${task.id}`}
                  key={task.id}
                >
                  {task.name}
                </Link>
                <span
                  className={css.delete}
                  title="delete"
                  onClick={() => {
                    let newList = finished.filter(
                      (item) => item.id !== task.id
                    );
                    setFinished(newList);
                  }}
                >
                  &#10006;
                </span>
              </div>
            );
          }))}
    </>
  );
};
