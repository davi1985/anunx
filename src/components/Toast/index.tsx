import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { SyntheticEvent, useContext } from 'react';

type ToastPros = {
  open: boolean;
  text: string;
  severity: 'error' | 'info' | 'success' | 'warning';
  onClose: () => void | null;
};

export const Toast = ({ open, text, severity, onClose }: ToastPros) => {
  const handleClose = (
    event: Event | SyntheticEvent<any, Event>,
    reason: any
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    if (onClose) onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};
