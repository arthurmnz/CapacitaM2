import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/mockapi";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const productCards = products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));

  return (
    <div>
      <h2>Produtos já cadastrados</h2>
      <div>{productCards}</div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
