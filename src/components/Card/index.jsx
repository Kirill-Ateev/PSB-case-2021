import { Paper, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: 'relative',
    padding: '36px 50px',
    backgroundColor: '#F0F0F0 !important',
    marginBottom: 30,
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
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default Card;
