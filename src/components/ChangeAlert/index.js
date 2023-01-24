import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button
          onClick={() => {
            toggleShow(false);
          }}
        >
          Cargar información
        </button>
      </div>
    );
  }
  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
