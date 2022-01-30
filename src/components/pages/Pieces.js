import React from "react";
import galletas from "../../assests/galleta.png";
import frog from "../../assests/frog.png";
import egg from "../../assests/egg.png";
import grogu from "../../assests/grogu.png";
import "./Pieces.css";
import "./Game.css";

const Pieces = () => {
  return (
    <div className="backgroundPieces">
      <div className="container">
        <div>
          <h2>Piezas del</h2>
          <div className="container-list">
            <ul>
              <li>Armario Mercancia</li>
              <li>Grugu</li>
              <li>Casillas x6</li>
              <li>Galletas x3</li>
              <li>Huevos x3</li>
              <li>Ranas x3</li>
            </ul>
          </div>
        </div>
        <div className="container-pieces">
          <div>
            <div className="container-closet">
              <div className="container-recipiente">
                <div className="container-cookies">
                  <img
                    src={galletas}
                    alt="galletas"
                    width={45}
                    height={45}
                  ></img>
                </div>
              </div>
              <div className="container-recipiente">
                <div className="container-cookies">
                  <img src={frog} alt="frog" width={45} height={45}></img>
                </div>
              </div>
              <div className="container-recipiente">
                <div className="container-cookies">
                  <img src={egg} alt="egg" width={45} height={45}></img>
                </div>
              </div>
            </div>
          </div>
          <img src={grogu} alt="grogu"></img>
          <div className="container-casilla"></div>
          <img src={galletas} alt="galletas" width={55} height={55}></img>
          <img src={egg} alt="egg" width={55} height={55}></img>
          <img src={frog} alt="frogg" width={55} height={55}></img>
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
