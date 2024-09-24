import React, { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

const PDFViewer = ({ pdfUrl }) => {
  const [scale, setScale] = useState(1.3);

  return (
    <div
      style={{
        width: "80%",
        height: "500px",
        position: "relative",
        overflow: "auto",
        border: "5px solid white",
        borderRadius: "10px",
      }}
    >
      <Document file={pdfUrl}>
        <Page pageNumber={1} scale={scale} />
      </Document>
    </div>
  );
};

export default PDFViewer;
