import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, FormControlLabel, Checkbox } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import axios from 'axios'
export default function RegisterForm({ onRegister }) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const register= await axios.post("https://stockerback.onrender.com/api/auth/register",
        {email: email,
        password: password,
        name: name,
      })
      alert("Usuario registrado correctamente" )
      if (onRegister) onRegister(register.data); // Llama a la función `onRegister` si
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Registrarse
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Registrarse
          </Button>
        </form>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ mt: 2 }}
        >
          Registrarse con Google
        </Button>
      </Box>
    </Container>
  );
}