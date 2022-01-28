import React from "react";
import grogu from "../../assests/grogu.png";
import "../UI/UI.css";

const Grogu = () => {
  return (
    <div className="grogu-image">
      <img src={grogu} alt="grogu" width={150} height={200}></img>
    </div>
  );
};

export default Grogu;
