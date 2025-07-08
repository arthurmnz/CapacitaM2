import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import ProductCard from './components/ProductCard.jsx'


function App() {
  return (
    <div style={{ padding: 20 }}>
      <ProductCard />
    </div>
  );
}

export default App;
