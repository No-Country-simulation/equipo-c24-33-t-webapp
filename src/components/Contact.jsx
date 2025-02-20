// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box component="footer" sx={{ mt: 4, py: 3,  textAlign: 'center' }}>
      <Divider sx={{ mb: 2 }} />
      <Container>
        <Typography variant="body1" color="textPrimary">
          &copy; {new Date().getFullYear()} Stocker - Todos los derechos reservados.
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            Visita nuestro Github:
          </Typography>
          <a href="https://github.com/No-Country-simulation/equipo-c24-33-t-webapp" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ color: '#333', fontSize: 30 }} />
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
