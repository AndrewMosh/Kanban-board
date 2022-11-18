import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import css from "./details.module.css";
import back from "./cross-svgrepo-com.svg";

const TaskDetails = ({
  backlog,
  ready,
  progress,
  finished,
  setBacklog,
  setReady,
  setProgress,
  setFinished,
}) => {
  const { taskId } = useParams();
  //находим задание по id
  let match = [backlog, ready, progress, finished];
  let task = 0;
  match.forEach((item) => {
    item.forEach((item) => {
      if (item.id === +taskId) {
        task = item;
      }
    });
  });
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [title, setTitle] = useState(task.name);
  //меняем состояние описания и заголовка
  const handleDescription = (description) => {
    setDescription(description);
  };
  const handleTitle = (title) => {
    setTitle(title);
  };
  const handleEdit = () => {
    setEdit(true);
  };
  //сохраняем изменненые данные
  const handleSave = () => {
    task.description = description;
    task.name = title;
    if (task.stat === "Backlog") {
      setBacklog([...backlog]);
    }
    if (task.stat === "Ready") {
      setReady([...ready]);
    }
    if (task.stat === "In progress") {
      setProgress([...progress]);
    }
    if (task.stat === "Finished") {
      setFinished([...finished]);
    }

    setEdit(false);
  };

  let content = null;
  if (!edit && task !== 0) {
    content = (
      <div className={css.current}>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else if (edit && task !== 0) {
    content = (
      <div className={css.form}>
        <input
          className={css.input}
          type="text"
          value={title}
          onChange={(e) => handleTitle(e.target.value)}
          autoFocus={true}
        />{" "}
        <br />
        <textarea
          className={css.textarea}
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
          rows="15"
          cols="23"
        ></textarea>
        <br />
        <button className={css.save} onClick={handleSave}>
          Save
        </button>
      </div>
    );
  } else if (task === 0) {
    content = (
      <h1 className={css.empty}>
        Task with ID <em>{taskId}</em> was not found
      </h1>
    );
  }
  return (
    <div className={css.container}>
      <Link title="back" className={css.back} to="/">
        {" "}
        <img src={back} alt="" />
      </Link>{" "}
      <br />
      {content}
    </div>
  );
};

export default TaskDetails;

//
