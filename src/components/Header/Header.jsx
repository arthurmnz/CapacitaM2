import React from "react";
import Routes from "../AppRoutes.jsx";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="Header">
        <a href="/">Neo Periféricos</a>
        <div className="Header-right">
          <a href="/TelaCadastro">Cadastro de produtos</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
