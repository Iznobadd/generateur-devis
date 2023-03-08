import React from "react";
import "./App.css";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import { PDFGenerator } from "./components/PDFGenerator";

function App() {
  return (
    <div className="test">
      <PDFViewer height={"100%"} width={"100%"}>
        <PDFGenerator />
      </PDFViewer>
    </div>
  );
}

export default App;
