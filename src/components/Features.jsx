import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import guy from "../assets/images/guy.png";

export default function Features() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ color: "#6D74B5", maxWidth: 650, paddingBottom: 3 }}
        variant="h4"
        gutterBottom
      >
        Con Stocker, administra tu empresa de forma simple, rápida y eficiente.
      </Typography>

      {/* Tarjeta con el texto */}
      <Card
        id="card_Stocker"
        sx={{
          minWidth: 275,
          maxWidth: 750,
          backgroundColor: "white",
          color: "#6D74B5",
          boxShadow: 0,
          padding: 4,
          display: "flex",
          alignItems: "flex-start", // Asegura que los elementos inicien alineados arriba
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <CardContent sx={{ flex: 1, textAlign: "left" }}> {/* Alinea el texto a la izquierda */}
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", fontSize: 30 }}
          >
            Plataforma intuitiva y fácil de usar
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6D74B5", paddingTop: 3, fontSize: 15 }}
          >
            Pensada para emprendedores y pequeños negocios sin experiencia en
            software de gestión.
          </Typography>
        </CardContent>

        {/* Imagen */}
        <CardContent sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src={guy} alt="chico" style={{ width: "100%", maxWidth: 300 }} />
        </CardContent>
      </Card>
    </Box>
  );
}
