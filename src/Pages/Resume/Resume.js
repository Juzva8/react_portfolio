import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from '../../components/PDF/Resume.pdf' 
import './Resume.css';

const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

function Resume() {
  return (
    <div container="App">
     <Worker workerUrl="../../components/PDF/Resume.p">
    <div id="pdfviewer">
        <Viewer fileUrl={filePDF}xs /> 
    </div>
    </Worker>
    </div>
  );
}

export default Resume;