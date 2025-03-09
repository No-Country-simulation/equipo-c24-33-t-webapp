import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import girl from "../assets/images/girl.png";

export default function Benefits() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 10,
      }}
    >
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* Imagen */}
        <CardContent
          sx={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <img
            src={girl}
            alt="chico"
            style={{ width: "100%", maxWidth: 300 }}
          />
        </CardContent>

        <CardContent sx={{ flex: 1, textAlign: "left" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", fontSize: 30 }}
          >
            Carga masiva de productos
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6D74B5", paddingTop: 3, fontSize: 15 }}
          >
            Agrega múltiples productos de una sola vez sin perder tiempo
            subiéndolos uno por uno.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
