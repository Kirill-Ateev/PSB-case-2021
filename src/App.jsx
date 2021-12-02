import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'flex',
    flexDirection: 'row'
  },
  column: {},
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header className="Header" />
      <div className={classes.main}>
        <div classNames={classes.column}>
          <Card title="Привет, Егор!" />
          <Card title="Привет, Егор!" />
        </div>
        <div classNames={classes.column}>
          <Card title="Привет, Егор!" />
        </div>
      </div>
    </div>
  );
}

export default App;
