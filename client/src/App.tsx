import React from "react";
import "./App.css";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import FormDevis from "./components/FormDevis";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="test">
      <Routes>
        <Route path="/" element={<FormDevis />} />
      </Routes>
    </div>
  );
}

export default App;
