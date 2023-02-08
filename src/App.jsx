import DolarValue from "./components/DolarValue";
import Footer from "./components/Footer";
import Steam from "./components/Steam";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DolarValue />} />
        <Route path="/steam" element={<Steam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
