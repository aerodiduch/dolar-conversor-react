import { React, useState } from "react";
import currency from "currency.js";

function Steam() {
  const [valor, setValor] = useState(0);

  return (
    <div className="container text-center mt-5 dolar-card">
      <h1 style={{ color: "#000080" }}>Steam</h1>
      <p className="fs-5 fw-bold">
        Ingresá el valor que figura en Steam y vas a conocer el precio final con
        impuestos
      </p>
      <h1>ARS {currency(valor).format()}</h1>
      <p className="fs-6">
        Este es el valor que se descontará cuando hagas el pago
      </p>
      <input
        onChange={(e) => setValor(e.target.value * 1.75)}
        type="number"
        className="text-center form-control mt-5"
        placeholder="Precio sin impuestos"
      />
      <div className="d-flex justify-content-center align-items-center"></div>
    </div>
  );
}

export default Steam;
