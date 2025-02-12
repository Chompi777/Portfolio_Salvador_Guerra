import React, { useState } from "react";
import { Link } from "react-scroll";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#212121", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Mi Portafolio
        </Typography>
        <div>
          <Button color="inherit" href="#about">
            Sobre Mí
          </Button>
          <Button color="inherit" href="#courses">
            Cursos
          </Button>
          <Button color="inherit" href="#projects">
            Proyectos
          </Button>
          <Button color="inherit" href="#contact">
            Contacto
          </Button>
        </div>
        <IconButton color="inherit" onClick={() => setNav(true)} sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={nav} onClose={() => setNav(false)}>
          <div style={{ width: 250, padding: "20px" }}>
            <IconButton onClick={() => setNav(false)}>
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem button>
                <Link to="about" smooth duration={500} onClick={() => setNav(false)}>
                  Sobre Mí
                </Link>
              </ListItem>
              <ListItem button>
                <Link to="courses" smooth duration={500} onClick={() => setNav(false)}>
                  Cursos
                </Link>
              </ListItem>
              <ListItem button>
                <Link to="projects" smooth duration={500} onClick={() => setNav(false)}>
                  Proyectos
                </Link>
              </ListItem>
              <ListItem button>
                <Link to="contact" smooth duration={500} onClick={() => setNav(false)}>
                  Contacto
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
