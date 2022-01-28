import React from "react";
import { Link } from "react-router-dom";
import { youwin } from "../../assests/";

const YouWinn = (props) => {
  return (
    <div className="container-youwinn">
      <h2>Misión completada!</h2>
      <h3> Pronto recibirás información del paradero de Ahsoka Tano</h3>
      <Link className="button-back" to="/" />
      <img src={youwin} alt="you-win" />
    </div>
  );
};

export default YouWinn;
