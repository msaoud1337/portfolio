import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Box } from '@mui/material';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const PdfViewer = () => {
  const pdfRef = useRef<HTMLDivElement | null>(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: pdfRef.current?.offsetHeight }}
      exit={{ height: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Box
        ref={pdfRef}
        sx={{
          '& .rpv-default-layout__toolbar, & .rpv-default-layout__sidebar-headers': {
            backgroundColor: 'background.neutral',
            color: 'text.primary',
          },
          '.rpv-core__minimal-button': { color: 'text.primary' },
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
          <Viewer fileUrl={'/my-cv.pdf'} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </Box>
    </motion.div>
  );
};

export default PdfViewer;
