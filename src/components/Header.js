import React from "react";
import "./Header.css"; // External stylesheet for styling
import logo from "./photos/logo.png";


const Header = () => {
  return (
    <header className="header">
      {/* Logo and Name */}
      <div className="logo">
      <img src={logo} alt="Cafe Flow Logo" className="logo-image" />

        <h1 className="logo-text">Cafe Flow</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Value" className="search-input" />
      </div>

      {/* Icons */}
      <div className="icons">
        <button className="icon-button">
          <i className="fas fa-bell"></i> {/* Notification Icon */}
        </button>
        <button className="icon-button">
          <i className="fas fa-receipt"></i> {/* Orders Icon */}
        </button>
        <button className="icon-button">
          <i className="fas fa-sync"></i> {/* Refresh Icon */}
        </button>
      </div>

      {/* Logout Button */}
      <button className="logout-button">Logout</button>
    </header>
  );
};

export default Header;