import "./Forms.css";
import React, { useState } from "react";
import { registerProduct } from "../../services/mockapi.js";

function Cadastro() {
  const [product, setProduct] = useState({
    Name: "",
    Price: "",
    Categories: "",
    Description: "",
    Storage: "",
    ImgUrl: "",
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
        Price: Number(product.Price).toFixed(2),
      };

      try {
        await registerProduct(productToSend);
        alert("Produto cadastrado com sucesso!");
        console.log("Produto cadastrado com sucesso!");
      } catch {
        alert("Erro ao cadastrar produto");
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
      <div className="form-left">
        <label>Nome do Produto:</label>
        <input
          className="input-field"
          id="Name"
          type="text"
          value={product.Name}
          onChange={handleChange}
          placeholder="Digite o nome do produto..."
        />
        <label>Preço do Produto:</label>
        <input
          className="input-field"
          id="Price"
          type="number"
          step="0.01"
          value={product.Price}
          onChange={handleChange}
          placeholder="Digite o Preço do produto..."
        />
        <label>Categorias do Produto:</label>
        <input
          className="input-field"
          id="Categories"
          type="text"
          value={product.Categories}
          onChange={handleChange}
          placeholder="Digite as categorias do produto..."
        />
        <label>Descrição do Produto:</label>
        <input
          className="input-field"
          id="Description"
          type="text"
          value={product.Description}
          onChange={handleChange}
          placeholder="Digite a descrição do produto..."
        />
        <label>Quantidade no estoque:</label>
        <input
          className="input-field"
          id="Storage"
          type="number"
          value={product.Storage}
          onChange={handleChange}
          placeholder="Digite a quantidade no estoque..."
        />
      </div>
      <div className="form-right">
        <label>Url da imagem:</label>
        <input
          className="input-field"
          id="ImgUrl"
          type="text"
          value={product.ImgUrl}
          onChange={handleChange}
          placeholder="Digite o nome do produto..."
        />
        <button className="submit-button" onClick={handleSubmit} type="submit">
          Cadastrar Produto
        </button>
      </div>
    </form>
  );
}

export default Cadastro;
