import React from "react";
import "./CloseButton.scss";

const CloseButton = ({ state: { openModal, setOpenModal } }) => {
  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <button onClick={handleClick} className="close-button pointerOnHover">
      X
    </button>
  );
};

export { CloseButton };
