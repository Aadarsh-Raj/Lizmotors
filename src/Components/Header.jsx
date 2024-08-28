import React from "react";
import "./Style/header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <h2>Lizmotors</h2>
        </div>
        <div className="login-container">
          <button>Login</button>
        </div>
      </header>
    </>
  );
};

export default Header;
