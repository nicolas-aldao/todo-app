import React from "react";
import "./CreateTodoButton.scss";

const CreateTodoButton = ({ state: { openModal, setOpenModal}}) => {
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
