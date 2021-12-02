import { Modal, Paper } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      width: 400,
      margin: 'auto'
    },
  }));

const ModalCard = () => {
    const classes = useStyles();
  return (
    <Modal open>
      <Paper className={classes.paper}>123</Paper>
    </Modal>
  );
};

export default ModalCard;
