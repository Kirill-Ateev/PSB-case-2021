import {
  Modal,
  Paper,
  Container,
  Dialog,
  DialogTitle,
  Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '20px 30px',
  },
  title: {
    marginBottom: '16px !important',
  },
}));

const ModalCard = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      onClose={onClose}
      open={open}
      transitionDuration={250}
    >
      <div className={classes.cardContainer}>
        <Typography className={classes.title} variant="h6">
          Название вопроса
        </Typography>
        <Typography variant="body1">
          По своей сути рыбатекст является альтернативой традиционному lorem
          ipsum, который вызывает у некторых людей недоумение при попытках
          прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
          языке наполнит любой макет непонятным смыслом и придаст неповторимый
          колорит советских времен.
        </Typography>
      </div>
    </Dialog>
  );
};

export default ModalCard;
