import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import axios from "axios";
import Swal from "sweetalert2";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://stockerback.onrender.com/api/auth/login",
        { email, password }
      );

      if (response.status === 200 && response.data.token) {
        if (onLogin) onLogin({ email, password });
        Swal.fire({
          icon: "success",
          title: "Logueo Exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/products");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Credenciales inválidas",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text:
          error.response?.status === 401
            ? "Usuario o contraseña incorrectos."
            : "Inténtalo de nuevo más tarde.",
      });
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F3F5FF",
        position: "relative",
      }}
    >
      {/* Forma de fondo */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: "50%",
          backgroundImage: "url('../assets/images/forma.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Contenedor principal */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Formulario de inicio de sesión */}
        <Box
          sx={{
            width: "40%",
            backgroundColor: "#E7E9FF",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#333", marginBottom: 2 }}
          >
            ¡Inicia tu sesión en Stocker!
          </Typography>

          <form onSubmit={handleSubmit}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Correo Electrónico
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="Ejemplo: usuario@stocker.com"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#333", borderRadius: "10px" }}
            >
              Contraseña
            </Typography>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              margin="normal"
              placeholder="Tu contraseña"
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link
              href="#"
              underline="hover"
              sx={{
                display: "block",
                textAlign: "center",
                color: "#6D74B5",
                fontSize: 14,
                marginY: 2,
              }}
            >
              ¿Olvidaste tu contraseña?
            </Link>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#32A8BC",
                color: "white",
                paddingY: 1,
                "&:hover": { backgroundColor: "#2B95A6" },
              }}
            >
              Iniciar sesión
            </Button>

            
          </form>
        </Box>

        {/* Texto descriptivo */}
        <Box sx={{ width: "50%", textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#000" }}>
            ¡Estás a un paso de <br /> disfrutar el mundo Stocker!
          </Typography>
          <Typography variant="body1" sx={{ color: "#4D4F6A", marginTop: 2 }}>
            Comienza a gestionar tu negocio y conoce todas las funcionalidades
            que ofrece Stocker para mantener tus ventas ordenadas.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
