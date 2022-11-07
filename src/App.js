import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
  const [game, setGame] = useState(false);

  const startAction = () => {
    window.alert("game started!");
    setGame(!game);
  };
  return (
    <>
      <div className="App">
        <h1>Board Game</h1>
      </div>
      <Title game={game}/>
      <Board game={game}/>
      <Button start={startAction} />
    </>
  );
}

export default App;
