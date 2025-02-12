import React from "react";
import { GitHub } from "@mui/icons-material";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="course-item">
        <h2>Curso GCP</h2>
        <div className="diploma-icon">
          <img src="ruta/a/gcp-icon.png" alt="GCP" />
        </div>
        <div className="course-links">
          <a href="https://github.com/tu-repositorio" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>

      <div className="course-item">
        <h2>Curso ICPC</h2>
        <div className="diploma-icon">
          <img src="ruta/a/icpc-icon.png" alt="ICPC" />
        </div>
        <div className="course-links">
          <a href="https://github.com/tu-repositorio" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>

      <div className="course-item">
        <h2>Curso Cisco</h2>
        <div className="diploma-icon">
          <img src="ruta/a/cisco-icon.png" alt="Cisco" />
        </div>
        <div className="course-links">
          <a href="https://github.com/tu-repositorio" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
