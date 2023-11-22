import { EyeIcon } from '@heroicons/react/24/solid';
import { Box, Button, Stack } from '@mui/material';
import DialogSlide from 'components/dialog';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const DISTANCE = 400;

const TRANSITION_ENTER1 = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeInDown = {
  initial: { y: -DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER1 },
};

const PDFGenerator = dynamic(
  import('./CvContent').then((res) => res.default),
  {
    ssr: false,
  }
);

export default function MyCvPDF() {
  const [open, setOpen] = useState(false);

  return (
    <Box px={4.75}>
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
