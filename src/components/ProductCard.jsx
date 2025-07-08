import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Chip, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';



  const ProductCard = (Product) => {
  const product = {
    Name: "product.Name",
    Price: "product.Price",
    Categories: "product.Categories",
    Description: "product.Description",
    Storage: "product.Storage",
    ImgUrl: "product.ImgUrl",
  };



  return (
    <Card sx={{ width: 300, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Marca: {product.brand}
        </Typography>

        <Chip
          label={product.category}
          color="primary"
          variant="filled"
          size="small"
          sx={{ my: 1 }}
        />

        <Typography variant="h6" color="primary">
          R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Typography>

        <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Estoque: {product.stock}
          </Typography>
          <Box>
            <IconButton size="small" color="primary">
              <Edit />
            </IconButton>
            <IconButton size="small" color="error">
              <Delete />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;