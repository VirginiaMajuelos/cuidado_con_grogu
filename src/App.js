import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Rules from "./components/pages/Rules";
import Pieces from "./components/pages/Pieces";
import Game from "./components/pages/Game";
import NewGame from "./components/pages/NewGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/pieces" element={<Pieces />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/new-game" element={<NewGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
