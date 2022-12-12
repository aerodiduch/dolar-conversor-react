import React from "react";
import { useState } from "react";
import currency from "currency.js";

function Convertidor({ valordeventa, valordecompra }) {
  const [quantity, setQuantity] = useState(0);

  function calcularVenta() {
    const valor = quantity*valordecompra
    const convertido = currency(valor)
    return convertido.format()
  }

  function calcularCompra() {
    const valor = quantity/valordeventa
    const convertido = currency(valor)
    return convertido.format()
  }

  calcularVenta()

  return (
    <div>
      <p className="fw-bold fs-5">Conversor divertido</p>
      <div className="input">
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          min='0'
          className="text-center form-control"
          placeholder="Monto a convertir"
        />
        <label for="basic-url" className="form-label">
          Ingrese pesos o dólares
        </label>
      </div>
      <div className="valores">
        <p>
          <span className="fw-bold"> ARS</span> {currency(quantity).format()} -&gt;{" "}
          <span className="fw-bold">USD</span>{" "}
          {calcularCompra()} (Compra)
        </p>
        <p>
          <span className="fw-bold"> USD</span> {currency(quantity).format()} -&gt;{" "}
          <span className="fw-bold">ARS</span>{" "} 
          {calcularVenta()} (Venta)
        </p>
      </div>
    </div>
  );
}

export default Convertidor;
