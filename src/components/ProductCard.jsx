import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Chip, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';


const ProductCard = () => {
  const product = {
    name: 'Fone Rosa Da Hello Kitty',
    brand: 'VAZIO',
    category: 'Headphones',
    price: 999.99,
    stock: 10,
    image: 'https://lojadasvariedades.cdn.magazord.com.br/img/2024/06/produto/35777/54-1.jpg?ims=fit-in/635x865/filters:fill(white)', // Substitua pela URL da sua imagem
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