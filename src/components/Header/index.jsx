import React from 'react';
import { AppBar, Button, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import Login from '../Login';
import ModalCard from '../ModalCard';
import logo from './assets/PSB_logo.png';
import coin from './assets/coin.png';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: 80,
    display: 'flex',
    zIndex: 999,
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.psbMain,
    transition: 'height 0.5s ease-out',
    alignItems: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    paddingTop: 1,
    height: '100%',
    color: 'white',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBase: {
    color: 'white !important',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  },
  logoContainer: {
    width: 124,
    paddingLeft: 'min(80px, 8%)',
    cursor: 'pointer',
  },
  logo: {
    width: 124,
  },
  tabs: {
    color: '#ffffff',
    borderRight: '1px white solid',
    paddingRight: 50,
    marginRight: 60,
  },
  userToolsContainer: {
    paddingRight: 'min(80px, 8%)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  money: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '#F7A63F',
    fontStyle: 'italic',
    marginLeft: 30,
},
  signUpButton: {
    color: '#ffffff !important',
  },
}));

const Header = ({ user: { isLogged }, userActions, balance }) => {
  const classes = useStyles();
  const [isSignUpShow, setIsSignUpShow] = React.useState(false);


  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <NavLink to="/">
          <img className={classes.logo} alt="logo" src={logo} />
        </NavLink>
      </div>
      <Login open={isSignUpShow} handleClose={() => setIsSignUpShow(false)} />
      <div className={classes.userToolsContainer}>
        <Tabs
          value={0}
          className={classes.tabs}
          variant="scrollable"
          scrollButtons="auto"
          // onChange={handleChange}
          textColor="primaryWhite"
          indicatorColor="secondary"
        >
          <Tab value={0} label="Главная" to='/' component={Link}>
            </Tab>
          {/* <Tab value={1} label="Проект" /> */}
          <div className={classes.money}>
            {`${balance} псб.`}
            <img src={coin} alt="coin" height={30} width={30}/>
          </div>
        </Tabs>
        <div className={classes.search}>
          <div className={classes.searchIconWrapper}>
            <SearchIcon />
          </div>
          <InputBase
            className={classes.inputBase}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        {isLogged ? (
          <Button
            className={classes.signUpButton}
            onClick={() => userActions.logout()}
          >
            Выйти
          </Button>
        ) : (
          <Button
            className={classes.signUpButton}
            onClick={() => setIsSignUpShow(true)}
          >
            Войти
          </Button>
        )}
      </div>
      {/* <Button onClick={() => setOpen(true)}>card</Button>
      <ModalCard open={open} onClose={() => setOpen(false)} /> */}
    </div>
  );
};

export default Header;
