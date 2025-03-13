// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("https://stockerback.onrender.com/api/auth/login", {
      email,
      password
    });

    if (response.status === 200 && response.data.token) {
      if (onLogin) onLogin({ email, password });
      Swal.fire({
        icon: "success",
        title: "Logueo Exitoso",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/products')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales inválidas"
      });
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("Error: Usuario o contraseña incorrectos.");
    } else {
      alert("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
    }
    console.log(error);
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
