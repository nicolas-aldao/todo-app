import React from "react";
import "./TodoList.scss";
const TodoList = (props) => {
  return (
    <section>
      <ul className="todolist">
        {/* {props.todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={()=> completeTodo(todo.text)}
          />
        ))} */}
        {props.children}
      </ul>
    </section>
  );
};

export { TodoList };
