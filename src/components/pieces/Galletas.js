import React from "react";
import galletas from "../../assests/galleta.png";

const Galletas = () => {
  return (
    <div className="container-galletas">
      <img id="1" src={galletas} alt="galletas" width={25} height={25}></img>
      <img id="2" src={galletas} alt="galletas" width={25} height={25}></img>
      <img id="3" src={galletas} alt="galletas" width={25} height={25}></img>
    </div>
  );
};

export default Galletas;
