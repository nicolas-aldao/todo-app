import React from "react";
import { AppContext } from "../../context/AppContext";
import "./TodoCounter.scss";

const TodoCounter = () => {
  const { completedTodos, todosTotal } = React.useContext(AppContext);
  return (
    <section>
      <h1 className="counter__title">
        You have completed {completedTodos}/{todosTotal} TODOs
      </h1>
    </section>
  );
};

export { TodoCounter };
