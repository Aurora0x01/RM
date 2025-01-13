import React from "react";
import { Link } from "react-router-dom";
import "../../style/Sidebar.css";

const SideBar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "orderHistory", label: "Order History" },
    { id: "products", label: "Products" },
    { id: "categories", label: "Categories" },
    { id: "employees", label: "Employees" },
  ];

  return (
    <div className="sidebardash">
      <div className="sidebardash-header">
        <h2>Café Flow</h2>
      </div>
      <ul className="sidebardash-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => setActiveSection(item.id)}
          >
            {item.id === "orderHistory" ? (
              <Link to="/orderHistory" style={{ textDecoration: "none", color: "inherit" }}>
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default SideBar;
