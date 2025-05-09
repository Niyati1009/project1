// src/pages/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Project Skill Matrix</h1>
      <div className="button-group">
        <button onClick={() => navigate("/admin")}>Admin View</button>
        <button onClick={() => navigate("/member")}>Member View</button>
      </div>
    </div>
  );
};

export default HomePage;
