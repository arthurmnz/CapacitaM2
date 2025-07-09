import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TelaCadastro from "./pages/TelaCadastro";
import TelaEdicao from "./pages/TelaEdicao";
import { Login } from "@mui/icons-material";
import "./components/Header.css";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav className="Header">
            <a href="/">Neo Periféricos</a>
            <div className="Header-right">
              <a href="/TelaCadastro">Cadastro de produtos</a>
              <a href="/TelaEdicao">Edição de produtos</a>
            </div>
          </nav>
          <br />
          <br />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TelaCadastro" element={<TelaCadastro />} />
          <Route path="/TelaEdicao" element={<TelaEdicao />} />
          <Route path="/TelaEdicao/:id" element={<TelaEdicao />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
