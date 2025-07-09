import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getAllProducts } from "../services/mockapi.js";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
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
      <button onClick={console.log(products)}>clique aq</button>
      <div className="containerCard">{productCards}</div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
