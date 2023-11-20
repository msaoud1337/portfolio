import { EyeIcon } from '@heroicons/react/24/solid';
import { Box, Button, Stack } from '@mui/material';
import DialogSlide from 'components/dialog';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

export default function MyCvPDF() {
  const PDFGenerator = dynamic(
    import('./CvContent').then((res) => res.default),
    {
      ssr: false,
    }
  );
  const [open, setOpen] = useState(true);

  return (
    <Box px={4.75}>
      <Stack mb={2} direction={'row'} justifyContent={'flex-end'} gap={1}>
        <Button endIcon={<EyeIcon height={18} width={18} />} size="small" variant="contained">
          Full screen
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
