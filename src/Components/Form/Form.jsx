import React, {useState} from "react";
import css from "./form.module.css";
import css2 from "./input.module.css";
import styles from './select.module.css'
import { useSelector, useDispatch } from "react-redux";
import { handleActive, handleAdd, moveTask } from "../../store/taskSlice";
export const Form = ({card}) => {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.tasks);
 
  const [val, setVal] = useState("");
  const [description, setDescription] = useState("");
   //устанавливаем введенное значение input
   const handleValue = (e) => {
    setVal(e.target.value);
  };
  //устанавливаем введенное значение textarea
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  //добавляем задание в backlog
  
  const handleButton = (id, status) => {
    let newTask =''
        if (val.trim().length > 0) {
          if (description.length > 0) {
          newTask =  {
              id: Math.floor(Math.random() * 10000),
              name: val,
              description: description,
              stat: status,
            }
            dispatch(handleAdd({newTask, id}))
          } else {
           newTask = {
              id: Math.floor(Math.random() * 10000),
              name: val,
              description: "This task has no description",
              stat: status,
            }
            dispatch(handleAdd({newTask,id}))
          }
        }
        setVal("");
        setDescription("");
      };
     
  return (
    <>
      {card.isActive===true && card.title==='Backlog' && (
        <div className={css2.container}>
          <input
            className={css2.input}
            type="text"
            placeholder="New task title"
            value={val}
            onChange={handleValue}
          />
          <textarea
            className={css2.textarea}
            value={description}
            placeholder="New task description"
            rows="5"
            cols="19"
            onChange={handleDescription}
          ></textarea>
        </div>
      )}
      {(card.isActive===true  && card.title==='Backlog' && (
        <button className={css.submit} onClick={()=>handleButton(card.id, card.title)} >
          Submit
        </button>
      )) || card.title==='Backlog' &&  (
        <button className={css.add} onClick={()=>dispatch(handleActive(card.id))}>
          + add card
        </button>
      )} 
      {card.isActive===true  && card.title!=='Backlog' &&  <div>
          <select
            className={styles.select}
            onChange={(e)=> dispatch(moveTask({val:e.target.value, id:card.id}))}
            multiple
          >
            {cards[card.id-1].tasks.map((el) => (
              <option
                className={styles.option}
                key={el.id}
               
                value={el.name}
                
              >
                {el.name}
              </option>
            ))}
          </select>
        </div> || card.title!=='Backlog' &&  ( cards[card.id-1].tasks.length===0 &&  <button
          className={css.add}
          key={card.id}
          disabled
        >
          + add card
        </button> ||  
        <button className={css.add} onClick={()=>dispatch(handleActive(card.id))}>
          + add card
        </button>)}
    </>
  );
};
