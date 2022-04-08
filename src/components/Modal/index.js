import React from "react";
import ReactDOM from "react-dom";
import { CloseButton } from "../CloseButton";
import "./Modal.scss";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-header">
        <CloseButton></CloseButton>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
