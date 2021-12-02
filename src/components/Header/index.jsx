import React from 'react';
import { AppBar, Button, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Login from '../Login';
import ModalCard from '../ModalCard';
import logo from './assets/logo.png';

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
    alignItems: 'center',
  },
  logoContainer: {
    width: 124,
  },
  logo: {
    width: '100%',
  },
  tabs: {
    color: '#ffffff'
  }
}));

const Header = () => {
  const classes = useStyles();
  const [isSignUpShow, setIsSignUpShow] = React.useState(false);

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} alt="logo" src={logo} />
      </div>
      <Login open={isSignUpShow} handleClose={() => setIsSignUpShow(false)} />
      <Tabs
        value={0}
        className={classes.tabs}
        // onChange={handleChange}
        textColor="primaryWhite"
        indicatorColor="secondary"
      >
        <Tab value={0} label="Item One" />
        <Tab value={1} label="Item Two" />
      </Tabs>
      <Button onClick={() => setIsSignUpShow(true)}>Sign up</Button>
      <Button onClick={() => setOpen(true)}>card</Button>
      <ModalCard open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Header;
