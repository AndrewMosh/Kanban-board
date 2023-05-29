import React from "react";
import { Form} from "../Form/Form";
import { Task } from "../Task/Task";
import css from "./main.module.css";
import { useSelector} from "react-redux";
const Main = () => {
  const cards = useSelector((state) => state.tasks);
  return (
    <main className={css.main}>
      <div className={css.container}>
        {cards.map((card) => (
          <div key={card.id} className={css.card}>
            <p className={css.title}>{card.title}</p>
            {<ul className={css.list}>
              <Task card={card}/>
            </ul> }        
              <div>
                <Form card={card}/>
              </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
