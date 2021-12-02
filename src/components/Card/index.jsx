import { Paper, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: '36px 50px',
    backgroundColor: '#F0F0F0 !important',
    width: 450,
    marginRight: 60,
    marginBottom: 60
  },
  title: {
    marginBottom: '16px !important',
    fontWeight: 'bold !important',
  },
}));

const Card = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.cardContainer}>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default Card;
