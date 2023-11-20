import { XMarkIcon } from '@heroicons/react/24/solid';
import { DialogTitle, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" timeout={{ enter: 10000, exit: 300 }} ref={ref} {...props} />;
});

type DialogProps = {
  content: string | JSX.Element;
  isOpen: boolean;
  onClose: VoidFunction;
  isFullScreen?: true;
};
export default function DialogSlide({ content, onClose, isOpen, isFullScreen }: DialogProps) {
  console.log('isOpen');
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        TransitionProps={{ timeout: 550 }}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        fullScreen={isFullScreen || false}
      >
        <DialogTitle>
          Search for an internship
          <IconButton
            edge="end"
            onClick={onClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 18, top: 2, color: 'primary.main' }}
          >
            <XMarkIcon height={24} width={24} color="inherit" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{content}</DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
