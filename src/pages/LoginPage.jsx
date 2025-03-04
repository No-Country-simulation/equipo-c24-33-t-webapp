
// eslint-disable-next-line no-unused-vars
import React from "react";
import LoginForm from "../components/LoginForm";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log("Datos enviados:", credentials);
  };
  return (
    <div>
      <ResponsiveAppBar />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
