// components/PdfViewer.jsx

'use client';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Box } from '@mui/material';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Box sx={{ height: '100vh' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
        <Viewer fileUrl={'/my-cv.pdf'} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </Box>
  );
};
export default PdfViewer;
