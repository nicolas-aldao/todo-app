import React from "react";
import "./Button.scss";

const Button = ({isSubmit, text, onClick}) => {
  return isSubmit ? (
    <button className="btn" type="submit" onSubmit={onClick}>
      {text}
    </button>
  ) : (
    <button className="btn" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
