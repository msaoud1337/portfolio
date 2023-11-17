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
  content: string;
  isOpen: boolean;
  onClose: VoidFunction;
};
export default function DialogSlide({ content, onClose, isOpen }: DialogProps) {
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        TransitionProps={{ timeout: 550 }}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{content}</DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
