import { useState } from "react";
import css from "./form.module.css";
import css2 from "./input.module.css";
import styles from "./select.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { handleActive, handleAdd, moveTask } from "../../store/taskSlice";
import { Task } from "../../config";
import { allCards } from "../../config";

interface propTypes {
    card: allCards;
}

export const Form: React.FC<propTypes> = ({ card }) => {
    const dispatch = useDispatch();
    const cards = useSelector((state: RootState) => state.tasks);

    const [val, setVal] = useState("");
    const [description, setDescription] = useState("");
    //устанавливаем введенное значение input
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };
    //устанавливаем введенное значение textarea
    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    //добавляем задание в backlog

    const addNewTask = (id: number, status: string) => {
        let newTask: Task;
        if (val.trim().length > 0) {
            if (description.length > 0) {
                newTask = {
                    id: Math.floor(Math.random() * 10000),
                    name: val,
                    description: description,
                    stat: status,
                };
                dispatch(handleAdd({ newTask, id }));
            } else {
                newTask = {
                    id: Math.floor(Math.random() * 10000),
                    name: val,
                    description: "This task has no description",
                    stat: status,
                };
                dispatch(handleAdd({ newTask, id }));
            }
        }
        setVal("");
        setDescription("");
    };

    const { isActive, title, id } = card;

    return (
        <>
            {isActive === true && title === "Backlog" && (
                <div className={css2.container}>
                    <input className={css2.input} type="text" placeholder="New task title" value={val} onChange={handleValue} />
                    <textarea
                        className={css2.textarea}
                        value={description}
                        placeholder="New task description"
                        onChange={handleDescription}
                    ></textarea>
                </div>
            )}
            {(isActive === true && title === "Backlog" && (
                <button className={css.submit} onClick={() => addNewTask(id, title)}>
                    Submit
                </button>
            )) ||
                (title === "Backlog" && (
                    <button className={css.add} onClick={() => dispatch(handleActive(id))}>
                        + add card
                    </button>
                ))}
            {(isActive === true && title !== "Backlog" && (
                <div>
                    <select className={styles.select} onChange={(e) => dispatch(moveTask({ val: e.target.value, id: id }))} multiple>
                        {cards[id - 1].tasks.map((el) => (
                            <option className={styles.option} key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
            )) ||
                (title !== "Backlog" &&
                    ((cards[id - 1].tasks.length === 0 && (
                        <button className={css.add} key={id} disabled>
                            + add card
                        </button>
                    )) || (
                        <button className={css.add} onClick={() => dispatch(handleActive(id))}>
                            + add card
                        </button>
                    )))}
        </>
    );
};
