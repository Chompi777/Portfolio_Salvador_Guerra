import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Header from "./components/Header"; // Corregí el nombre del Header
import { Container } from "@mui/material"; // Utilizando Container de MUI para un diseño más limpio
import "./App.css"; // Aseguramos que los estilos globales también se apliquen

const App = () => {
  return (
    <div>
      {/* Encabezado */}
      <Header />

      {/* Contenido Principal */}
      <main>
        <Container>
          {/* Sección Sobre Mí */}
          <About />

          {/* Sección Cursos */}
          <Courses />

          {/* Sección Proyectos */}
          <Projects />

          {/* Sección Contacto */}
          <Contact />
        </Container>
      </main>

      {/* Pie de página o información adicional (si la tienes) */}
      <footer className="footer">
        <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
