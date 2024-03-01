import React from "react";
import "./ProdNav.css";
import { Link } from "react-router-dom";

export default function ProductNav() {
  return (
    <div>
      <div className="bar">
        
        <button>sort</button>
        <input type="text" className="search" size={60} />
        <Link to="create">
        <button>create</button>
        </Link>
      </div>
    </div>
  );
}
