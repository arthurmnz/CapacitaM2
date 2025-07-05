import React, { useState } from "react";
import { registerProduct } from "../services/mockapi.js";

function Cadastro() {
  const [product, setProduct] = useState({
    Name: "",
    Price: "",
    Categories: "",
    Description: "",
    Storage: "",
  });

  const validateProduct = (product) => {
    if (
      !product.Name ||
      !product.Price ||
      !product.Categories ||
      !product.Description
    ) {
      alert("Preencha os campos obrigatórios.");
      return false;
    }
    if (parseInt(product.Storage) < 0) {
      alert("Estoque não pode conter valores negativos.");
      return false;
    }
    if (parseFloat(product.Price) < 0) {
      alert("Preço do produto não pode conter valores negativo.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateProduct(product)) {
      const productToSend = {
        ...product,
        Categories: product.Categories.split(","),
        Storage: parseInt(product.Storage),
        Price: parseFloat(product.Price),
      };

      try {
        await registerProduct(productToSend);
        console.log("Produto cadastrado com sucesso!");
      } catch {
        console.log("Erro ao cadastrar produto");
      }
    } else {
      console.log("Produto inválido, não foi possível cadastrar.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Nome do Produto:</label>
      <input
        id="Name"
        type="text"
        value={product.Name}
        onChange={handleChange}
        placeholder="Digite o nome do produto..."
      />

      <label>Preço do Produto:</label>
      <input
        id="Price"
        type="number"
        value={product.Price}
        onChange={handleChange}
        placeholder="Digite o Preço do produto..."
      />

      <label>Categorias do Produto:</label>
      <input
        id="Categories"
        type="text"
        value={product.Categories}
        onChange={handleChange}
        placeholder="Digite as categorias do produto..."
      />

      <label>Descrição do Produto:</label>
      <input
        id="Description"
        type="text"
        value={product.Description}
        onChange={handleChange}
        placeholder="Digite a descrição do produto..."
      />

      <label>Quantidade no estoque:</label>
      <input
        id="Storage"
        type="number"
        value={product.Storage}
        onChange={handleChange}
        placeholder="Digite a quantidade no estoque..."
      />
      <button onClick={handleSubmit} type="submit">
        Cadastrar Produto
      </button>
    </form>
  );
}

export default Cadastro;
