import React from "react";

const Button = ({ start }) => {
  return (
    <>
      <button type="button" onClick={start}>
        Start
      </button>
      <button type="button">Hint</button>
    </>
  );
};

export default Button;
