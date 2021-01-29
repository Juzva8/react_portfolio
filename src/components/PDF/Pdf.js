import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from '../PDF/Pdf.js';

const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

function Pdf() {
  return (
    <div className="App">
     <Worker workerUrl='../PDF/Pdf.js'>
    <div id="pdfviewer">
        <Viewer fileUrl={filePDF} /> 
    </div>
    </Worker>
    </div>
  );
}

export default Pdf;