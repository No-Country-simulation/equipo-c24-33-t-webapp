import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, FormControlLabel, Checkbox } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

export default function RegisterForm({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onRegister) onRegister({ name, email, password, subscribe });
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
          <FormControlLabel
            control={<Checkbox checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />}
            label="Quiero recibir notificaciones por email"
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