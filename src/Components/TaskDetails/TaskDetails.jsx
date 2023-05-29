import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import css from "./details.module.css";
import back from "./cross-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../../store/taskSlice";
const TaskDetails = () => {
  const cards = useSelector((state) => state.tasks);
  const { taskId } = useParams();
const dispatch = useDispatch()
  //находим задание по id
  let match = [cards[0], cards[1], cards[2], cards[3]];
  let issue = 0;
  let ind=''
  match.forEach((item) => {
    item.tasks.forEach((el) => {
      if (el.id === +taskId) {
        issue = el;
        ind=item.id
      }   
    });   
  });
  console.log(ind);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(issue.description);
  const [title, setTitle] = useState(issue.name);
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
    dispatch(editTask({ cardIndex:ind, id: issue.id, name: title, description:description }));
    setEdit(false);
  };
  let content = null;
  if (!edit && issue !== 0) {
    content = (
      <div className={css.current}>
        <h2>{issue.name}</h2>
        <p>{issue.description}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else if (edit && issue !== 0) {
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
  } else if (issue === 0) {
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
