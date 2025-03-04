// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import axios from 'axios';
export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const login = await axios.post("https://stockerback.onrender.com/api/auth/login", {
        email,
        password
      })
      console.log(login.data)
      alert("Usuario logueado correctamente" )
      if (onLogin) onLogin({ email, password });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Iniciar Sesión
          </Button>
        </form>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ mt: 2 }}
        >
          Iniciar sesión con Google
        </Button>
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', cursor: 'pointer', color: 'primary.main' }}>
          ¿Olvidaste tu contraseña?
        </Typography>
      </Box>
    </Container>
  );
}
