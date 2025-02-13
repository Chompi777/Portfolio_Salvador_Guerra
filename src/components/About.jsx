import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Sobre mí</h1>
        <p>Descripción del puesto y demás información que desees agregar aquí.</p>
      </div>
      <div className="about-image">
        <img src="src/assets/Profile.jpeg" alt="Tu foto" />
      </div>
    </div>
  );
};

export default About;
