import React from "react";
import RegisterForm from "../components/RegisterForm";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
const RegisterPage = () => {
  const handleRegister = (userData) => {
    console.log("Usuario registrado:", userData);
  };
  return (
    <div>
      <ResponsiveAppBar />
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
