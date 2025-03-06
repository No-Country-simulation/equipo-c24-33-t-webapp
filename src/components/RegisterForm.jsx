import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import axios from "axios";
import "../assets/styles/registerForm.css";

export default function RegisterForm({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post(
        "https://stockerback.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      alert("Usuario registrado correctamente");
      if (onRegister) onRegister(register.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="register-container">
      <div className="register-left">
        <h1>Stocker</h1>
        <h2>Comprueba los beneficios de Stocker con una prueba gratuita</h2>
        <p>No necesitas agregar datos de tarjeta de crédito</p>
        <div className="register-steps">
          <div className="register-step-box">1️⃣ Ingresa tus datos</div>
          <div className="register-step-box">
            2️⃣ Verifica tu correo electrónico
          </div>
          <div className="register-step-box">
            3️⃣ ¡Listo! Ya puedes usar Stocker
          </div>
        </div>
      </div>

      <div className="register-right">
        <form className="register-form" onSubmit={handleSubmit}>
          <h3>¡Empieza a utilizar Stocker!</h3>
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
          <Button
  type="submit"
  variant="contained"
  fullWidth
  sx={{
    backgroundColor: "#97D9E4",
    width: "50%",
    marginTop: "10px",
    color: "#2a2a2a",
    padding: "10px 30px",
    borderRadius: "20px",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "#8c95f3",
    },
  }}
>
            ¡Activar!
          </Button>
        </form>
      </div>
    </section>
  );
}
