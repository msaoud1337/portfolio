import { EyeIcon } from '@heroicons/react/24/solid';
import { Box, Button, Stack } from '@mui/material';
import DialogSlide from 'components/dialog';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const PDFGenerator = dynamic(
  import('./CvContent').then((res) => res.default),
  {
    ssr: false,
  }
);

export default function MyCvPDF() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Stack mb={2} direction={'row'} justifyContent={'flex-end'} gap={1}>
        <Button
          onClick={() => setOpen(true)}
          endIcon={<EyeIcon height={18} width={18} />}
          size="small"
          variant="contained"
          sx={{ color: 'primary.contrastText' }}
        >
          Full Page
        </Button>
      </Stack>
      <PDFGenerator />
      <DialogSlide
        isOpen={open}
        content={<PDFGenerator />}
        onClose={() => setOpen(false)}
        isFullScreen
      />
    </Box>
  );
}
