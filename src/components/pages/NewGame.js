import React, { useState } from "react";
import galletas from "../../assests/galleta.png";
import egg from "../../assests/egg.png";
import frog from "../../assests/frog.png";
import grogu from "../../assests/grogu.png";
import "./Game.css";
import "../pieces/Armario";
import YouWinn from "../Result/YouWin";
import YouLost from "../Result/YouLost";

const NewGame = ({
  scoreCookie,
  setScoreCookie,
  scoreFrog,
  setScoreFrog,
  scoreEgg,
  setScoreEgg,
  setScoreGrogu,
  scoreGrogu,
}) => {
  const [resultDice, setResultDice] = useState("Dado");
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);

  //actualización del armario para completar la misión

  // Resultado Dado:
  const options = ["Grogu", "Galletas", "Huevos", "Ranas"];
  let resultTotal = options[Math.floor(Math.random() * 4)];

  const showResult = (props) => {
    setResultDice(resultTotal);
    if (resultTotal === "Galletas") {
      setScoreCookie(scoreCookie - 1);
      console.log("soy una galleta restandome", scoreCookie - 1);
    } else if (resultTotal === "Huevos") {
      setScoreEgg(scoreEgg - 1);
      console.log("soy una Huevo restandome", scoreEgg - 1);
    } else if (resultTotal === "Ranas") {
      setScoreFrog(scoreFrog - 1);
      console.log("soy una Rana restandome", scoreFrog - 1);
    } else if (resultTotal === "Grogu") {
      setOne(false);
      setScoreGrogu(scoreGrogu + 1);
      console.log("soy grogu avanzando", scoreGrogu + 1);
    } else if (resultTotal === "Grogu") {
      setTwo(true);
      setScoreGrogu(scoreGrogu + 1);
      console.log("soy grogu avanzando", scoreGrogu + 1);
    } else if (resultTotal === "Grogu") {
      setThree(true);
      setScoreGrogu(scoreGrogu + 1);
      console.log("soy grogu avanzando", scoreGrogu + 1);
    } else if (resultTotal === "Grogu") {
      setFour(true);
      setScoreGrogu(scoreGrogu + 1);
      console.log("soy grogu avanzando", scoreGrogu + 1);
    } else if (resultTotal === "Grogu") {
      setFive(true);
      setScoreGrogu(scoreGrogu + 1);
      console.log("soy grogu avanzando", scoreGrogu + 1);
    } else if (resultTotal === "Grogu") {
      setSix(true);
      setScoreGrogu(scoreGrogu + 1);
      console.log("soy grogu avanzando", scoreGrogu + 1);
    }
    const misionDone = () => {
      if (scoreCookie <= 0 && scoreFrog <= 0 && scoreEgg <= 0) {
        setWin(true);
      } else if (scoreGrogu >= setSeven) {
        setLost(true);
      }
    };
    misionDone();
  };

  // Dado y acciones:

  return (
    <div className="backgroundGame">
      <div className="container-board">
        <div className="grogu-image">
          <img
            className={one ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div className="grogu-image">
          <img
            className={two ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div className="grogu-image">
          <img
            className={three ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div className="grogu-image">
          <img
            className={four ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div className="grogu-image">
          <img
            className={five ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div className="grogu-image">
          <img
            className={six ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div>
          <img
            className={seven ? "" : "hiden"}
            src={grogu}
            alt="grogu"
            width={150}
            height={200}
          ></img>
        </div>
        <div className="container-casilla"></div>
        <div className="container-casilla"></div>
        <div className="container-casilla"></div>
        <div className="container-casilla"></div>
        <div className="container-casilla"></div>
        <div className="container-casilla"></div>

        <div className="container-closet">
          <div className="container-recipiente">
            <div className="container-cookies">
              <img src={galletas} alt="galletas" width={45} height={45}></img>
              <h2>{scoreCookie}</h2>
            </div>
          </div>
          <div className="container-recipiente">
            <div className="container-cookies">
              <img src={frog} alt="frog" width={45} height={45}></img>
              <h2>{scoreFrog}</h2>
            </div>
          </div>
          <div className="container-recipiente">
            <div className="container-cookies">
              <img src={egg} alt="egg" width={45} height={45}></img>
              <h2>{scoreEgg}</h2>
            </div>
          </div>
        </div>
      </div>
      <h3>Dado:</h3>
      <div className="container-dado" onClick={showResult}>
        <h2>{resultDice}</h2>
      </div>
      <div>
        <YouWinn win={win} />
        <YouLost lost={lost} />
      </div>
    </div>
  );
};

export default NewGame;
