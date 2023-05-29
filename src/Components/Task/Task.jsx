import React from "react";
import { Link } from "react-router-dom";
import css from "./task.module.css";
import { removeTask } from "../../store/taskSlice";
import { useDispatch } from "react-redux";
export const Task = (card) => {
  const dispatch=useDispatch()
  return (
    <>
    {card.card.tasks.map(task =>   
          <div className={css.task} key={task.id}>
            <Link
              className={css.link}
              to={`/tasks/${task.id}`}
              key={task.id}
            >
              {task.name}
            </Link>
            <span
              className={css.delete}
              title="delete"
              onClick={() => dispatch(removeTask({cardId:card.card.id,taskId:task.id}))}
            >
              &#10006;
            </span>
          </div>)}
    </>
  );
};
