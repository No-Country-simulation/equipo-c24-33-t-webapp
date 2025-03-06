import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "../../assets/styles/productPage.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f1f1f1",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function ProductPage() {
  return (
    <div className="container">
      <Box my={4}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <i className="fas fa-search"></i>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit">Todos</Button>
            <Button color="inherit">Productos</Button>
            <Button color="inherit">Servicios</Button>
            <Button color="inherit">Pack</Button>
            <Button variant="contained" color="primary">
              + Crear
            </Button>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Tipo de producto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <input type="checkbox" />
                    <Typography variant="body2" color="textSecondary" ml={2}>
                      No hay productos agregados
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    Aquí se vería el estado
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    Aquí se vería la marca
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    Aquí se vería el tipo de producto
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" flexDirection="column" alignItems="center" py={10}>
          <img
            src="https://placehold.co/200x200"
            alt="Illustration of a person sitting with a laptop"
            width="200"
            height="200"
          />
          <Typography variant="body1" color="textSecondary" align="center">
            No tienes productos registrados. Ve a la opción "Crear" y en
            "Productos" agrega un nuevo producto.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ProductPage;
