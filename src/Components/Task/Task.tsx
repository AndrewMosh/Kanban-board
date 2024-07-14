import { Link } from "react-router-dom";
import css from "./task.module.css";
import { removeTask } from "../../store/taskSlice";
import { useDispatch } from "react-redux";
import { allCards } from "../../config";
import { Task as oneTask } from "../../config";

interface propTypes {
    card: allCards;
}

export const Task: React.FC<propTypes> = ({ card }) => {
    const dispatch = useDispatch();

    return (
        <>
            {card.tasks.map((task: oneTask) => (
                <div className={css.task} key={task.id}>
                    <Link className={css.link} to={`/tasks/${task.id}`}>
                        {task.name}
                    </Link>
                    <span
                        className={css.delete}
                        title="delete"
                        onClick={() => {
                            dispatch(removeTask({ cardId: card.id, taskId: task.id }));
                        }}
                    >
                        &#10006;
                    </span>
                </div>
            ))}
        </>
    );
};
