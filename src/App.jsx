import { useState } from "react";
import StartGame from "./components/StartGame";
import "./App.css";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((perv) => !perv);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
