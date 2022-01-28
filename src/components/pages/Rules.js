import React from "react";
import CascoList from "../UI/CascoList";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="backgroundRules">
      <div className="container-rules">
        <h2>REGLAS DEL JUEGO</h2>
        <CascoList />
        <p>
          El juego es muy sencillo. Dispondremos de 6 casillas que representan
          un camino en la zona de carga de la Razor Crest que lleva hasta el
          armario donde se encuentra segura la mercancía. De este modo tendremos
          7 casillas, 6 del camino y una que representa al armario:
          🔲🔲🔲🔲🔲🔲❎ Durante el viaje has hecho muy bien tu trabajo pero
          ahora debes vaciar el armario. Para ello deberás descargar la
          mercancía poco a poco. Este es el momento más delicado ya que Grogu
          puede aprovechar y llegar hasta el armario. Si eso ocurre se comerá lo
          que encuentre y Mando perderá la oportunidad de saber dónde esta
          Ahsoka. Ergo, te has quedado sin recompensa. Además de esas 7 piezas
          tendrás tres recipientes donde se guarda cada tipo de mercancía. De
          esta manera quedaría:
        </p>
        <ul>
          <li>
            Recipiente de las galletas: Tendrá 3 cajas de galletas azules dentro
          </li>
          <li>
            Recipiente de los huevos de rana: Tendrá dentro 3 huevos de rana
            (sin fertilizar)
          </li>
          <li>Recipiente de las ranas: Tendrá dentro 3 ranas</li>
          <li>Galleta: Descargas una caja de galletas azules 🍪 </li>
          <li>
            Huevo de Rana: Descargas un huevo de rana (con mucho cuidado)🥚
          </li>
          <li>Rana: Descargas una rana 🐸</li>
          <li> Grogu se mueve una casilla 👣 </li>
        </ul>
        <p>
          Ganarás el juego si consigues descargar toda la mercancía. Perderás si
          Grogu llega a la última casilla (el armario).
        </p>
        <a className="button-back" href="/">
          Home
        </a>
      </div>
    </div>
  );
};

export default Rules;
