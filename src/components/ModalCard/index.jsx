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

import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Link} from 'react-router-dom';

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
    fontWeight: 'bold !important',
  },
  closeIcon: {
    paddingBottom: 13,
    cursor: 'pointer'
  },
  // breadcrumbs: {
  //   marginBottom: 30,
  //   color: 'grey !important'
  // },
  // iconContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
}));

const ModalCard = ({ open, title, onClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      onClose={onClose}
      maxWidth={'xl'}
      open={open}
      transitionDuration={250}
    >
      <div className={classes.cardContainer}>
        {/*<div className={classes.breadcrumbs}>*/}
        {/*  <Breadcrumbs*/}
        {/*      separator={<NavigateNextIcon fontSize="small"/>}*/}
        {/*      aria-label="breadcrumb"*/}
        {/*  >*/}
        {/*    <Link className={classes.iconContainer}*/}
        {/*          underline="hover" to="/">*/}
        {/*      <HomeIcon/>*/}
        {/*    </Link>*/}
        {/*    <Link underline="hover" to="">*/}
        {/*      Карточка проекта*/}
        {/*    </Link>*/}

        {/*  </Breadcrumbs>*/}
        {/*</div>*/}
        <div className={classes.titleContainer}>
          <Typography className={classes.title} variant="h5">
            {title}
          </Typography>
          <CloseIcon className={classes.closeIcon} onClick={onClose} />
        </div>
          {children}
      </div>
    </Dialog>
  );
};

export default ModalCard;
