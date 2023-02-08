import { useEffect, useState } from "react";
import Convertidor from "./Convertidor";
import RedirectButton from "./RedirectButton";

function DolarValue() {
  const [valorVenta, setValorVenta] = useState(null);
  const [valorCompra, setValorCompra] = useState(null);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then((response) => response.json())
      .then((data) => {
        setValorVenta(data.blue["value_sell"]);
        setValorCompra(data.blue["value_buy"]);
      });
  }, []);

  return (
    <div className="container text-center mt-5 dolar-card">
      <h1 style={{ color: "#000080" }}>Dolar Blue</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <h1>${valorCompra}</h1>
            <p className="fs-4 fw-bold">Compra</p>
          </div>
          <div className="col">
            <h1>${valorVenta}</h1>
            <p className="fs-4 fw-bold">Venta</p>
          </div>
        </div>
      </div>
      <Convertidor valordeventa={valorVenta} valordecompra={valorCompra} />
      <p className="">Fuente: Ámbito Financiero</p>
      <RedirectButton />
    </div>
  );
}

export default DolarValue;
