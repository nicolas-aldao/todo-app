import React from "react";
//import { AppContext } from "../../App/useTodos";
import "./CreateTodoButton.scss";

const CreateTodoButton = ({ state: { openModal, setOpenModal}}) => {
  //const { openModal, setOpenModal } = React.useContext(AppContext);
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
