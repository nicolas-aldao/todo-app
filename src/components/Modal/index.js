import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-header">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
