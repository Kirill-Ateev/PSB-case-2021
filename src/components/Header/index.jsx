import React from 'react';
import { AppBar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Login from '../Login';
import ModalCard from '../ModalCard';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.psbMain,
    transition: 'height 0.5s ease-out',
  },
}));

const Hero = () => {
  const classes = useStyles();
  const [isSignUpShow, setIsSignUpShow ] = React.useState(false);

  return (
    <div className={classes.header} position="static">
      This is header!
      <Login open={isSignUpShow} handleClose={() => setIsSignUpShow(false)} />
      <Button onClick={() => setIsSignUpShow(true)}>Sign up</Button>
      <Button onClick={() => setOpen(true)}>card</Button>
      {/* <ModalCard open={open} onClose={() => setOpen(false)} /> */}
    </div>
  );
};

export default Hero;
