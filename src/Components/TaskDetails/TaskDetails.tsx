import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { editTask } from "../../store/taskSlice"; // Assuming you have this action

import css from "./details.module.css";
import back from "./cross-svgrepo-com.svg";

const TaskDetails: React.FC = () => {
    const cards = useSelector((state: RootState) => state.tasks);
    const { taskId } = useParams<{ taskId: string }>();
    const dispatch = useDispatch();

    const { issue, columnId } = useMemo(() => {
        for (const column of cards) {
            const task = column.tasks.find((task) => task.id === Number(taskId));
            if (task) {
                return { issue: task, columnId: column.id };
            }
        }
        return { issue: undefined, columnId: undefined };
    }, [cards, taskId]);

    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState(issue?.description ?? "");
    const [title, setTitle] = useState(issue?.name ?? "");

    useEffect(() => {
        if (issue) {
            setDescription(issue.description || "");
            setTitle(issue.name || "");
        }
    }, [taskId]);

    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    const handleSave = () => {
        if (issue && columnId !== undefined) {
            dispatch(
                editTask({
                    cardIndex: columnId,
                    id: issue.id,
                    name: title,
                    description: description,
                })
            );
            setEdit(false);
        }
    };

    const handleCancel = () => {
        setEdit(false);
        setDescription(issue?.description ?? "");
        setTitle(issue?.name ?? "");
    };

    if (!issue) {
        return (
            <h1 className={css.empty}>
                Task with ID <em>{taskId}</em> was not found
            </h1>
        );
    }

    return (
        <div className={css.container}>
            <Link title="back" className={css.back} to="/">
                <img src={back} alt="Back" />
            </Link>
            <br />
            {!edit ? (
                <div className={css.current}>
                    <h2>{issue.name}</h2>
                    <p>{issue.description}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <div className={css.form}>
                    <input className={css.input} type="text" value={title} onChange={handleTitle} autoFocus />
                    <br />
                    <textarea className={css.textarea} value={description} onChange={handleDescription}></textarea>
                    <br />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default TaskDetails;
