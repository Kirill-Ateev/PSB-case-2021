import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import CardEntry from "./components/CardEntry";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px 20px'
  },
  column: {
    position: 'relative',
    
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header className="Header" />
      <div className={classes.main}>
        <div className={classes.column}>
          <Card title="Привет, Егор!" />
          <Card title="Привет, Егор!" />
          <Card title={"Мои проекты"}>
            <CardEntry text="Личный кабинет “PSB IT HERO”"/>
          </Card>
        </div>
        <div className={classes.column}>
          <Card title="Привет, Егор!" />
        </div>
      </div>
    </div>
  );
}

export default App;
