import { Dialog, DialogContent, DialogTitle, Grid, Hidden, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  }
}));

function Index({
  open,
  handleClose,
}) {
  const classes = useStyles();
  return (
    <Dialog maxWidth="xs" open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography align='center'>
          {'لطفاً مسابقه را فقط در یک تب دنبال کنید!'}
        </Typography>
      </DialogTitle>
    </Dialog >
  );
}


export default Index;