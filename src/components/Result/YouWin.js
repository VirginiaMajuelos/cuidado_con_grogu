import React from "react";
import { Link } from "react-router-dom";
import youwin from "../../assests/youwin.png";

const YouWinn = (props) => {
  return (
    <div className={props.win ? "container-result" : "hiden"}>
      <h2>Misión completada!</h2>
      <h3> Pronto recibirás información del paradero de Ahsoka Tano</h3>
      <img src={youwin} alt="you-win" />
      <Link className="button-back" to="/">
        Inicio
      </Link>
    </div>
  );
};

export default YouWinn;
