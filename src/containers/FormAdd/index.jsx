import React from "react";
import { Button } from "../../components/Button";
import { CloseButton } from "../../components/CloseButton";
import "./FormAdd.scss";

const FormAdd = ({
  title,
  placeholder,
  buttonAdd,
  state: { setOpenModal, openModal, addTodo },
}) => {
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
    <>
      <div className="header">
        <label>{title}</label>
        <CloseButton state={{ openModal, setOpenModal }} />
      </div>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          className="text-area"
          onChange={onChange}
          placeholder={placeholder}
        ></textarea>
        <div className="form-buttons">
          <Button onClick={onCancel} text={"Cancel"} />
          <Button isSubmit onClick={onSubmit} text={buttonAdd} />
        </div>
      </form>
    </>
  );
};

export { FormAdd };
