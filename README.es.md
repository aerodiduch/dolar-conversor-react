# Dólar Blue React

[![License: MIT](https://img.shields.io/github/license/aerodiduch/dolar-conversor-react)](LICENSE) ![React](https://img.shields.io/badge/react-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/vite-646CFF?logo=vite&logoColor=white) [![Demo on Netlify](https://img.shields.io/badge/demo-Netlify-00C7B7?logo=netlify&logoColor=white)](https://dolar-blue-react.netlify.app/)

[English](README.md)

Mi primer proyecto de frontend, hecho con React. Muestra la cotización del dólar blue de la API de [Bluelytics](https://bluelytics.com.ar/) y convierte entre pesos y dólares.

- **Inicio (`/`)**: compra y venta del dólar blue, más un conversor: escribís un monto y te lo muestra en la otra moneda.
- **`/steam`**: escribís un precio de Steam y te lo muestra con el 75 % de impuestos sumado.

Demo en vivo: https://dolar-blue-react.netlify.app/

## Correrlo en tu máquina

Necesitás Node.js.

```sh
git clone https://github.com/aerodiduch/dolar-conversor-react
cd dolar-conversor-react
npm install
npm run dev
```

## Stack

React 18 con Vite, React Router, Bootstrap para los estilos, Font Awesome para los íconos y currency.js para darles formato a los montos.

## Licencia

MIT, ver [LICENSE](LICENSE).
