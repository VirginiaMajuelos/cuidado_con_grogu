import React from "react";
import Navbar from "../Layout/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="backgroundHome">
        <Navbar />
        <h1>Cuidado con Grogu!</h1>
      </div>
    </div>
  );
};

export default Home;
