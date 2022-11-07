import React, { useEffect } from "react";

const Board = ({ game }) => {
  useEffect(() => {
    console.log(`game updated status : ${game}`);
  }, [game]);

  return (
    <>
      <p>this is a board</p>
      {game && (
        <div>
          <div>row 1</div>
          <div>row 2</div>
          <div>row 3</div>
          <div>row 4</div>
        </div>
      )}
    </>
  );
};

export default Board;
