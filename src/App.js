import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Rules from "./components/pages/Rules";
import Pieces from "./components/pages/Pieces";
import Game from "./components/pages/Game";
import NewGame from "./components/pages/NewGame";
import "./index.css";

function App() {
  const [scoreCookie, setScoreCookie] = useState(3);
  const [scoreEgg, setScoreEgg] = useState(3);
  const [scoreFrog, setScoreFrog] = useState(3);
  const [scoreGrogu, setScoreGrogu] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/pieces" element={<Pieces />} />
        <Route path="/game" element={<Game />} />
        <Route
          path="/game/new-game"
          element={
            <NewGame
              scoreCookie={scoreCookie}
              setScoreCookie={setScoreCookie}
              scoreEgg={scoreEgg}
              setScoreEgg={setScoreEgg}
              scoreFrog={scoreFrog}
              setScoreFrog={setScoreFrog}
              setScoreGrogu={setScoreGrogu}
              scoreGrogu={scoreGrogu}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
