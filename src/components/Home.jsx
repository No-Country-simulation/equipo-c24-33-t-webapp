import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import illustration from "../assets/images/image.png"; 
import Shape from "../assets/images/background-shape.png"
export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Shape})`,   
        backgroundSize: "75%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",

      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        {/* Tarjeta con el texto */}
        <Card
          id="card_Stocker"
          sx={{
            minWidth: 275,
            maxWidth: 500,
            backgroundColor: "transparent",
            boxShadow: 0,
            padding: 4,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", fontSize: 35 }}
            >
              Organiza tu inventario de una forma sencilla
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#505F98", paddingTop: 3, fontSize: 15 }}
            >
              En Stocker podrás organizar el inventario de tu empresa,
              visualizar su estado en tiempo real y optimizar los procesos para
              una gestión más eficiente. <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                marginLeft: 6,
                paddingX: 3,
                backgroundColor: "#97D9E4",
                color: "black",
                fontSize: 12,
              }}
            >
              Iniciar Sesión
            </Button>
            <Button
              size="small"
              sx={{
                paddingX: 3,
                backgroundColor: "#f5f6ff",
                outline: 1,
                color: "black",
                fontSize: 12,
              }}
            >
              Más Información
            </Button>
          </CardActions>
        </Card>

        {/* Imagen de la ilustración */}
        <Box sx={{ width: 400 }}>
          <img src={illustration} alt="Ilustración" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
}
