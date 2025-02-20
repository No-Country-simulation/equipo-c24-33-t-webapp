// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container, Button } from "@mui/material";
import { Link } from "react-scroll";
import AdbIcon from "@mui/icons-material/Adb";

function ResponsiveAppBar() {
  return (
    <div style={{ backgroundColor: "#eef5fd", borderRadius: "20px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#eef5fd",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#4876ee" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#4876ee",
                textDecoration: "none",
              }}
            >
              STOCKER
            </Typography>

            {/* Items de navegación */}
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              {["Inicio", "Funciones", "Beneficios", "Automatización", "Seguridad", "Contacto"].map(
                (section) => (
                  <Button
                    key={section}
                    component={Link}
                    to={section.toLowerCase()} // ID de la sección
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    sx={{
                      mx: 2,
                      color: "#333333",
                      fontWeight: 500,
                      textTransform: "none",
                      "&:hover": { color: "#4876ee" },
                    }}
                  >
                    {section}
                  </Button>
                )
              )}
            </Box>

            {/* Botones de autenticación */}
            <Box sx={{ flexGrow: 0 }}>
              <Button
                  href="/register"
                  sx={{
                    color: "white",
                    backgroundColor: "#2a313f",
                    "&:hover": { backgroundColor: "#1e2532" },
                    margin: '15px'
                  }}
                >
                  Registrarse
                </Button>

              <Button
                href="/login"
                sx={{
                  color: "#333333",
                  backgroundColor: "#f1f7fd",
                  marginRight: "15px",
                  "&:hover": { backgroundColor: "#dbe9fa" },
                }}
              >
                Iniciar Sesión
              </Button>

              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default ResponsiveAppBar;
