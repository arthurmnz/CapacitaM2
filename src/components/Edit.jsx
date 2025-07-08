import "./Forms.css";
import React, { useState } from "react";
import { updateProduct, getProductById } from "../services/mockapi.js";

function Editar() {
  // ajudar hj const id = URLSearchParams(window.location.search).get("id");
  const id = 2;
  const productData = getProductById(id);
  const [product, setProduct] = useState(productData);

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
        await updateProduct(productToSend);
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
      <br />
      <input
        id="Name"
        type="text"
        value={product.Name}
        onChange={handleChange}
        placeholder="Digite o nome do produto..."
      />{" "}
      <br />
      <label>Preço do Produto:</label>
      <br />
      <input
        id="Price"
        type="number"
        value={product.Price}
        onChange={handleChange}
        placeholder="Digite o Preço do produto..."
      />{" "}
      <br />
      <label>Categorias do Produto:</label>
      <br />
      <input
        id="Categories"
        type="text"
        value={product.Categories}
        onChange={handleChange}
        placeholder="Digite as categorias do produto..."
      />{" "}
      <br />
      <label>Descrição do Produto:</label>
      <br />
      <input
        id="Description"
        type="text"
        value={product.Description}
        onChange={handleChange}
        placeholder="Digite a descrição do produto..."
      />{" "}
      <br />
      <label>Quantidade no estoque:</label>
      <br />
      <input
        id="Storage"
        type="number"
        value={product.Storage}
        onChange={handleChange}
        placeholder="Digite a quantidade no estoque..."
      />{" "}
      <br /> <br />
      <button onClick={handleSubmit} type="submit">
        Salvar mudança
      </button>
    </form>
  );
}

export default Editar;
