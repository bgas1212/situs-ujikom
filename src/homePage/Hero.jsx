import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div>
      <img
        src="public/nasi goreng.png"
        alt=""
        className="bg"
      />
      <img src="src/assets/logo.png" alt="logo" className="logo" />
      <p className="subtitle">
        <b>Lorem ipsum dolor sit amet consectetur adipisicing.</b>
      </p>
    </div>
  );
}
