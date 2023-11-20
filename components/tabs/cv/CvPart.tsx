import { Button } from '@mui/material';
import DialogSlide from 'components/dialog';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
// import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

export default function MyCvPDF() {
  const PDFGenerator = dynamic(
    import('./CvContent').then((res) => res.default),
    {
      ssr: false,
    }
  );
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        open
      </Button>
      <DialogSlide
        isOpen={open}
        content={<PDFGenerator />}
        onClose={() => setOpen(false)}
        isFullScreen
      />
    </>
  );
}
