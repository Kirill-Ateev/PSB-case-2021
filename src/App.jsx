import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { makeStyles } from '@mui/styles';
import { bindActionCreators } from 'redux';
import * as dataActions from './actions/data';
import * as userActions from './actions/user';
import { connect } from 'react-redux';
import human from "./constants/assets/human.png"
import { LinearProgress, Typography } from '@mui/material';
import {SignIn} from './components/Login';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '60px'
  },
  column: {
    position: 'relative',
    
  },
  helloCardImg: {
    top: -6,
    right: '8%',
    width: 156,
    position: 'absolute'
  },
  helloCardSubtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: '-15px !important'
  },
  authContainer: {
    marginTop: 120
  }
}));

function App({user, user: {isLogged}, dataActions, userActions}) {
  const classes = useStyles();

useEffect(() => {
  if (isLogged)
  dataActions.getProjects()
  else
  userActions.checkAuthorized()
}, [isLogged])

if (isLogged===null) return <LinearProgress />

  return (
    isLogged ?<div className="App">
      <Header className="Header" />
      <div className={classes.main}>
        <div className={classes.column}>
          <Card title="Привет, Егор!" >
            <img className={classes.helloCardImg} src={human} alt="human"/>
            <Typography className={classes.helloCardSubtitle} variant="body1">Хорошего тебе дня</Typography>
          </Card>
          <Card title="Привет, Егор!" />
        </div>
        <div className={classes.column}>
          <Card title="Привет, Егор!" />
        </div>
      </div>
    </div>
    : <div className={classes.authContainer}><Header className="Header" user={user} /><SignIn handleLogin={userActions.login} /></div>
  );
}

function mapStateToProps() {
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

