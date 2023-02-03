import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.scss";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <>
        <div className="ChangeAlert-bg">
          <div className="ChangeAlert-container">
            <p>Hubo cambios</p>
            <button
              onClick={() => {
                toggleShow(false);
              }}
            >
              Cargar información
            </button>
          </div>
        </div>
      </>
    );
  }
  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
