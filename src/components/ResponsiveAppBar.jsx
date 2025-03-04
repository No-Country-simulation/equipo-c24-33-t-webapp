// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#DFF3F7",
        borderRadius: 0, 
        margin: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: "30px",
              fontWeight: "bold",
              color: "#545A8C",
              textDecoration: "none",
            }}
          >
            Stocker
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
