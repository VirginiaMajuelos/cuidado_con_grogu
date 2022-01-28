import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container-nav">
        <Link className="items" to="rules">
          RULES
        </Link>
        <Link className="items" to="pieces">
          PIECES
        </Link>
        <Link className="items" to="game">
          GAME
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
