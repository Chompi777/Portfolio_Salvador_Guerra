import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { Container } from "@mui/material";
import "./App.css"; // Importa los estilos

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Reduje a 2s la duración de la intro
  }, []);

  return (
    <div>
      {showIntro && <div className="intro-screen">This is my Portfolio</div>}

      {!showIntro && (
        <>
          <Header />
          <main>
            <Container>
              <About />
              <Courses />
              <Projects />
              <Contact />
            </Container>
          </main>
          <footer className="footer">
            <p>&copy; 2025 Salvador Guerra (Chompi). Todos los derechos reservados.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
