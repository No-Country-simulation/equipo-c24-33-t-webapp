// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Container, Typography, Box, Divider, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AdbIcon from "@mui/icons-material/Adb";

const Contact = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 4,
        color: "#333",
        textAlign: "center",
      }}
    >
      <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.2)", mb: 2 }} />

      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#4876ee",
            }}
          />
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
        </Box>

        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
          La mejor solución para gestionar tu negocio de manera eficiente.
        </Typography>

        {/* Social Media Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/No-Country-simulation/equipo-c24-33-t-webapp"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#black", "&:hover": { color: "#black" } }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Stocker. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
