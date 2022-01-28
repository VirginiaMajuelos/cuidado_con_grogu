import React from "react";
import { Link } from "react-router-dom";

import "./UI.css";

const Start = () => {
  return (
    <Link className="button-start" to="new-game">
      START MISIÓN!
    </Link>
  );
};

export default Start;
