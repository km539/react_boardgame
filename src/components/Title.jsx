import React, { useState } from "react";

const Title = ({ game }) => {
  const [turn, setTurn] = useState("black");
  return (
    <>
      <h1>This turn is {turn}</h1>
    </>
  );
};

export default Title;
