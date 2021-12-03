import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  entry: {
    display: 'flex',
    justifyContent: 'flex-start',
    columnGap: '30px',
    alignItems: 'center',
  },
  icon: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    border: '2px solid #000000',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    opacity: '50%',
    display: 'flex',
    gap: 6,
    flexDirection: 'column',
  },
  a: {
    color: '#303181',
  },
}));

const CardEntry = ({ icon, text, link = '#' }) => {
  const classes = useStyles();

  return (
    <div className={classes.entry}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>
        <div>{text}</div>
        <Link to={link}>Перейти →</Link>
      </div>
    </div>
  );
};

export default CardEntry;
