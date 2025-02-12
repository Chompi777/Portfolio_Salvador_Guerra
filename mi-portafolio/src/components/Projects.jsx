import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const Projects = () => {
  const projects = [
    { name: "App de Transporte", description: "Aplicación en tiempo real para buses en El Salvador." },
    { name: "Sistema de Facturación", description: "Sistema web para manejar facturación en PHP y MySQL." },
    { name: "Portafolio Personal", description: "Este mismo proyecto con React y Tailwind CSS." },
  ];

  return (
    <section id="projects" style={{ padding: "80px 0", textAlign: "center" }}>
      <Container>
        <Typography variant="h3" color="primary" fontWeight="bold">
          Mis Proyectos
        </Typography>
        <Grid container spacing={4} sx={{ mt: 6 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
