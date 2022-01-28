import React from "react";
import { Link } from "react-router-dom";
import { youlost } from "../../assests/grogu-youlost.png";

const YouLost = (props) => {
  return (
    <div className="container-youwinn">
      <h2> Has perdido la misión! </h2>
      <h3> Grogu se ha comido la mercancía!</h3>
      <h3> ¿Quieres volver a</h3>
      <Link className="button-back" to="/new-game" />
      <img src={youlost} alt="you-win" />
    </div>
  );
};

export default YouLost;
