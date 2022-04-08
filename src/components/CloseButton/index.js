import React from "react";
import { AppContext } from "../../context/AppContext";
import "./CloseButton.scss";

const CloseButton = () => {
  const { openModal, setOpenModal } = React.useContext(AppContext);
  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <button onClick={handleClick} className="close-button">
      X
    </button>
  );
};

export {CloseButton};
