import React from "react";
import css from "./footer.module.css";

const Footer = ({ backlog, finished }) => {
  return (
    <footer className={css.container}>
      <div className={css.active}>
        <p className={css.para}>
          Active tasks: <strong>{backlog.length}</strong>
        </p>
        <p className={css.para}>
          Finished tasks: <strong>{finished.length}</strong>
        </p>
      </div>
      <p className={css.author}>
        Kanban board by <strong>Andrei Moshchenko</strong>, Year:
        <strong> {new Date().getFullYear()}</strong>
      </p>
    </footer>
  );
};
export default Footer;
