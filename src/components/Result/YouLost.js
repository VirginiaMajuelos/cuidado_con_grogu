import React from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import youlost from "../../assests/grogu-youlost.png";

const YouLost = (props) => {
  return (
    <div className={props.lost ? "container-result" : "hiden"}>
      <h2> Has perdido la misión! </h2>
      <h3> Grogu se ha comido la mercancía!</h3>
      <img src={youlost} alt="you-win" />
      <h3> ¿Quieres volver a jugar?</h3>
      <Link className="button-back" to="/game">
        Volver a jugar
      </Link>
    </div>
  );
};

export default YouLost;
