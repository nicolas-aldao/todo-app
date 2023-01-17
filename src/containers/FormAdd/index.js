import React from "react";
import "./FormAdd.scss";

const FormAdd = ({title, placeholder, buttonAdd, state: { setOpenModal, addTodo}}) => {
  const [newTODOValue, setNewTODOValue] = React.useState("");
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTODOValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTODOValue);
    setOpenModal(false);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>{title}</label>
      <textarea onChange={onChange} placeholder={placeholder}></textarea>
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" onSubmit={onSubmit}>
          {buttonAdd}
        </button>
      </div>
    </form>
  );
};

export { FormAdd };
