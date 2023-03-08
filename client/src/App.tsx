import React from "react";
import "./App.css";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import { PDFGenerator } from "./components/PDFGenerator";
import FormDevis from "./components/FormDevis";

function App() {
  return (
    <div className="test">
      {/* <PDFViewer height={"100%"} width={"100%"}>
        <PDFGenerator />
      </PDFViewer> */}
      <FormDevis />
    </div>
  );
}

export default App;
