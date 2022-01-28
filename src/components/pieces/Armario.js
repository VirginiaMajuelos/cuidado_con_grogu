import React from "react";
import "./Armario.css";
import Galletas from "./Galletas";
import Recipientes from "./Recipientes";
import Huevos from "./Huevos";
import Ranas from "./Ranas";

const Armario = () => {
  return (
    <div className="armario">
      <Recipientes />
      <Galletas />
      <Recipientes />
      <Huevos />
      <Recipientes />
      <Ranas />
    </div>
  );
};

export default Armario;
