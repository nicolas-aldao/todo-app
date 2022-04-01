import React from "react";
import './TodoCounter.scss';

const TodoCounter = ({todosTotal, completedTodos}) => {
  return (
    <section>
      <h2 className="counter__title">You have completed {completedTodos}/{todosTotal} TODOs</h2>
    </section>
  );
};

export { TodoCounter };
