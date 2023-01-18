import React from "react";
import "./TodoItem.scss";
// assets
import { FcCheckmark } from "react-icons/fc";
import { IoTrashOutline } from "react-icons/io5";

const TodoItem = (props) => {
  return (
    <li className="todoitem">
      <div className="todoitem__container">
        <span className="todoitem__span" onClick={props.onComplete}>
          <FcCheckmark className='check-icon' style={{}}/>
        </span>
        <p
          className={`todoitem__p ${
            props.completed ? "todoitem__completed" : ""
          }`}
        >
          {props.text}
        </p>
        <span className="todoitem__span" onClick={props.onDelete}>
          <IoTrashOutline className='delete-icon'/>
        </span>
      </div>
    </li>
  );
};

export { TodoItem };
