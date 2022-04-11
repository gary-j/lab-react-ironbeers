import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to='/'>
      <div className="header">
        <i className="bi bi-house-fill"></i>
      </div>
    </Link>
  );
};

export default Header;
