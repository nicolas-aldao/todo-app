import React from "react";
import "./TodoCounter.scss";

const TodoCounter = ({ state: { completedTodos, todosTotal } }) => {
  return (
    <section>
      <h1 className="counter__title">
        You have completed {completedTodos}/{todosTotal} TODOs.
      </h1>
    </section>
  );
};

export { TodoCounter };
