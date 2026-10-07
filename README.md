# Dólar Blue React

[![License: MIT](https://img.shields.io/github/license/aerodiduch/dolar-conversor-react)](LICENSE) ![React](https://img.shields.io/badge/react-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/vite-646CFF?logo=vite&logoColor=white) [![Demo on Netlify](https://img.shields.io/badge/demo-Netlify-00C7B7?logo=netlify&logoColor=white)](https://dolar-blue-react.netlify.app/)

[Español](README.es.md)

My first frontend project, made with React. It shows the Argentine blue dollar rate from the [Bluelytics](https://bluelytics.com.ar/) API and converts between pesos and dollars. The app itself is in Spanish.

- **Home (`/`)**: the blue dollar buy and sell rates, plus a converter: type an amount and it shows it in the other currency.
- **`/steam`**: type a Steam price and it shows it with 75% added for taxes.

Live demo: https://dolar-blue-react.netlify.app/

## Run it locally

You need Node.js.

```sh
git clone https://github.com/aerodiduch/dolar-conversor-react
cd dolar-conversor-react
npm install
npm run dev
```

## Stack

React 18 with Vite, React Router, Bootstrap for the styles, Font Awesome for the icons and currency.js to format the amounts.

## License

MIT, see [LICENSE](LICENSE).
