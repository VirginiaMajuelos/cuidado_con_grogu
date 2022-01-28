import React from "react";
import Armario from "../pieces/Armario";
import Casilla from "../pieces/Casilla";
import Dado from "../pieces/Dado";
import Galletas from "../pieces/Galletas";
import Grogu from "../pieces/Grogu";
import Huevos from "../pieces/Huevos";
import Ranas from "../pieces/Ranas";
import Recipientes from "../pieces/Recipientes";
import "./Pieces.css";

const Pieces = () => {
  return (
    <div className="backgroundPieces">
      <div className="container">
        <div>
          <h2>Pieces</h2>
        </div>
        <div className="container-pieces">
          <Armario />
          <Casilla />
          <Dado />
          <Galletas />
          <Grogu />
          <Huevos />
          <Ranas />
          <Recipientes />
        </div>
        <div className="container-button">
          <a className="button-back" href="/">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pieces;
