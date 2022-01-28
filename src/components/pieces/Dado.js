import React, { useState } from "react";
import "./Dado.css";

const Dado = () => {
  const [resultDice, setResultDice] = useState("Dado");

  const dado = ["Grogu", "Galletas", "Huevos", "Ranas"];

  let resultTotal = dado[Math.floor(Math.random() * dado.length)];

  const showResult = () => {
    setResultDice(resultTotal);
  };

  return (
    <div className="container-dado" onClick={showResult}>
      <h2>{resultDice}</h2>
    </div>
  );
};

export default Dado;
