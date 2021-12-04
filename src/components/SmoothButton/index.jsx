import { LinearProgress, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '45px !important',
    height: '35px !important',
  },
}));

const SmoothButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={props.onButtonClick}
      variant="outlined"
    >
      {props.text}
    </Button>
  );
};

export default SmoothButton;
