import React from "react";
import Armario from "../pieces/Armario";
import "./Game.css";
import "../pieces/Armario";
import Casilla from "../pieces/Casilla";
import Grogu from "../pieces/Grogu";
import Dado from "../pieces/Dado";

const NewGame = () => {
  return (
    <div className="backgroundGame">
      <div className="container-board">
        <Dado />
        <Grogu id="8" />
        <Casilla id="1" />
        <Casilla id="2" />
        <Casilla id="3" />
        <Casilla id="4" />
        <Casilla id="5" />
        <Casilla id="6" />
        <Armario id="7" />
      </div>
    </div>
  );
};

export default NewGame;
