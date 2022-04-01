import React from "react";
import "./TodoItem.scss";

const TodoItem = (props) => {
  return (
    <li className="todoitem">
      <div className="todoitem__container">
        <span className="todoitem__span" onClick={props.onCompleted}>✓</span>
        <p
          className={`todoitem__p ${
            props.completed ? "todoitem__completed" : ""}`}
        >
          {props.text}
        </p>
        <span className="todoitem__span" onClick={props.onDelete}>X</span>
      </div>
    </li>
  );
};

export { TodoItem };
