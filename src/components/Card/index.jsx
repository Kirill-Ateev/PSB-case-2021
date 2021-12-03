import { Paper, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: 'relative',
    padding: '36px 50px',
    backgroundColor: 'white !important',
    marginBottom: 30,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
  },
  title: {
    marginBottom: '16px !important',
    fontWeight: 'bold !important',
  },
}));

const Card = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper  className={classes.cardContainer} elevation={0}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default Card;
