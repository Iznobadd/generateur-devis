import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Devis from "./screens/Devis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devis" element={<Devis />} />
    </Routes>
  );
}

export default App;
