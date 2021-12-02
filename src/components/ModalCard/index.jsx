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
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '20px 30px',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: '16px !important',
  },
  closeIcon: {
    paddingBottom: 13,
    cursor: 'pointer'
  }
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
        <div className={classes.titleContainer}>
          <Typography className={classes.title} variant="h6">
            Название вопроса
          </Typography>
          <CloseIcon className={classes.closeIcon} onClick={onClose} />
        </div>
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
