import React from "react";
import { Link } from "react-router-dom";

function RedirectButton() {
  return (
    <Link to="/steam">
      <p>Calculador de precios de Steam</p>
    </Link>
  );
}

export default RedirectButton;
