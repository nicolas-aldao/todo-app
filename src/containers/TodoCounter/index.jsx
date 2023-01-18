import React from "react";
import "./TodoCounter.scss";

const TodoCounter = ({ state: { completedTodos, totalTodos } }) => {
  return (
    <section>
      <h1 className="counter__title">
        You have completed {completedTodos}/{totalTodos} TODOs.
      </h1>
    </section>
  );
};

export { TodoCounter };
