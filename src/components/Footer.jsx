import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Button } from "@mui/material";
import { Facebook, LinkedIn, Twitter, YouTube, Instagram } from "@mui/icons-material";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#E7ECFF",
        paddingY: 4,
        paddingX: 10,
      }}
    >
      {/* Sección superior con texto y botón */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "#6D74B5" }}>
          ©2025 Stocker
        </Typography>

        <Button
          sx={{
            paddingX: 3,
            backgroundColor: "#32A8BC",
            color: "white",
            fontSize: 12,
            "&:hover": { backgroundColor: "#2B95A6" },
          }}
          onClick={() => navigate("/register")}
        >
          Regístrarse
        </Button>
      </Box>

      {/* Línea divisoria */}
      <Divider sx={{ width: "100%", backgroundColor: "#C3C8E0" }} />

      {/* Sección de iconos de redes sociales */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "End",
          gap: 2,
          marginTop: 2,
        }}
      >
        <Facebook sx={{ color: "#A0A5C0" }} />
        <LinkedIn sx={{ color: "#A0A5C0", marginLeft: 2 }} />
        <Twitter sx={{ color: "#A0A5C0", marginLeft: 2 }} />
        <YouTube sx={{ color: "#A0A5C0", marginLeft: 2 }} />
        <Instagram sx={{ color: "#A0A5C0", marginLeft: 2 }} />
      </Box>
    </Box>
  );
}
