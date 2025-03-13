import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem, InputLabel, Select, FormControl } from "@mui/material";
import axios from "axios";

function CreateProductPage() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [variantName, setVariantName] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");
  const [categoryId, setCategoryId] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const productData = {
      name: productName,
      price: parseFloat(price), 
      quantity: 1, 
      categoryId: categoryId, 
    };

    try {
      const response = await axios.post(
        "https://stockerback.onrender.com/api/products", 
        productData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Producto creado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <Box my={4} p={2}>
      <Typography variant="h4" gutterBottom>
        Crear Producto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="row" mb={2}>
          <Box mr={2}>
            <TextField
              label="Nombre del Producto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mr={2}>
            <TextField
              label="Tipo"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box>
            <TextField
              label="Marca"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              fullWidth
              required
            />
          </Box>
        </Box>
        
        <Box display="flex" flexDirection="row" mb={2}>
          <Box mr={2}>
            <TextField
              label="Nombre Variante"
              value={variantName}
              onChange={(e) => setVariantName(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mr={2}>
            <TextField
              label="Precio"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box>
            <TextField
              label="SKU"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              fullWidth
              required
            />
          </Box>
        </Box>

        <Box mb={2}>
          <FormControl fullWidth required>
            <InputLabel>Seleccionar Categoría</InputLabel>
            <Select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              label="Seleccionar Categoría"
            >
              <MenuItem value={1}>Electrónica</MenuItem>
              <MenuItem value={2}>Ropa</MenuItem>
              <MenuItem value={3}>Hogar</MenuItem>
    
            </Select>
          </FormControl>
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Crear Producto
        </Button>
      </form>
    </Box>
  );
}

export default CreateProductPage;
