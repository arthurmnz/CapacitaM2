import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard.jsx";
import { getAllProducts } from "../../services/mockapi.js";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="loader-container">
        <h1>Nenhum Produto Cadastrado</h1>
      </div>
    );
  }
  const productCards = products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));

  return (
    <div className="home">
      <div className="container-card">{productCards}</div>
    </div>
  );
};

export default Home;
