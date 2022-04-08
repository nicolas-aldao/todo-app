import React from "react";
import { AppContext } from "../../context/AppContext";
import "./CreateTodoButton.scss";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = React.useContext(AppContext);
  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <section className="section__add-todo-button">
      <button onClick={handleClick} className="add-todo-button">
        +
      </button>
    </section>
  );
};

export { CreateTodoButton };
