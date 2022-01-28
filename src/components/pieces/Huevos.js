import React from "react";
import egg from "../../assests/egg.png";
import "./Huevos.css";

const Huevos = () => {
  return (
    <div className="container-huevos">
      <img src={egg} alt="egg" width={40} height={40} />
      <img src={egg} alt="egg" width={40} height={40} />
      <img src={egg} alt="egg" width={40} height={40} />
    </div>
  );
};

export default Huevos;
