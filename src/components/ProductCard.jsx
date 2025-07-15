import React from "react";
// import { deleteProduct } from "../services/mockapi.js";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Box,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const ProductCard = ({
  Name = "",
  Price = 0,
  Categories = "",
  Description = "",
  Storage = 0,
  ImgUrl = "",
  id = "",
}) => {
  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ width: 300, borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={
            ImgUrl || "https://via.placeholder.com/300x180?text=Sem+Imagem"
          }
          alt={Name}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descrição: {Description}
          </Typography>
          <Chip
            label={
              Array.isArray(Categories) ? Categories.join(", ") : Categories
            }
            color="primary"
            variant="filled"
            size="small"
            sx={{ my: 1 }}
          />
          <Typography variant="h6" color="primary">
            R${" "}
            {Number(Price).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </Typography>
          <Box
            mt={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              Estoque: {Storage}
            </Typography>
            <Box>
              <IconButton
                size="small"
                color="primary"
                component="a"
                href={`/TelaEdicao/${id}`}
              >
                <Edit />
              </IconButton>
              <IconButton size="small" color="error">
                <Delete />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
