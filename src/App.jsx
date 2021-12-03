import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import CardEntry from './components/CardEntry';
import { makeStyles } from '@mui/styles';
import { bindActionCreators } from 'redux';
import * as dataActions from './actions/data';
import * as userActions from './actions/user';
import { connect } from 'react-redux';
import human from './constants/assets/human.png';
import { LinearProgress, Typography } from '@mui/material';
import { SignIn } from './components/Login';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import SavingsIcon from '@mui/icons-material/Savings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Routes, Route } from 'react-router-dom';
import Project from './components/Project';
import SmoothButton from './components/SmoothButton';

// supervisor@test.com TESTtest123

const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '60px',
  },
  column: {
    position: 'relative',
  },
  helloCardImg: {
    top: -6,
    right: '8%',
    width: 156,
    position: 'absolute',
  },
  helloCardSubtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: '-15px !important',
  },
  authContainer: {
    marginTop: 190,
  },
  adaptationContainer: {
    display: 'flex',
    gap: 15,
    flexDirection: 'column'
  },
  meetingItem: {
    marginRight: 30
  },
  meetingButton: {
    marginLeft: "-10px"
  },
}));

const adaptationBlocks = [
  {
    id: 1,
    icon: <SchoolIcon fontSize="large" />,
    text: 'Вводные курсы',
    link: `/courses`,
  },
  {
    id: 2,
    icon: <SavingsIcon fontSize="large" />,
    text: 'Банк знаний',
    link: `/knowledge`,
  },
  {
    id: 3,
    icon: <ContactSupportIcon fontSize="large" />,
    text: 'FAQ',
    link: `/faq`,
  },
];

function App({
  user,
  user: { isLogged },
  data,
  data: { projects },
  dataActions,
  userActions,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (isLogged) dataActions.getProjects();
    else userActions.checkAuthorized();
  }, [isLogged]);

  if (isLogged === null) return <LinearProgress />;

  return isLogged ? (
    <div className="App">
      <Header className="Header" user={user} userActions={userActions} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={classes.main}>
              <div className={classes.column}>
                <Card title="Привет, Егор!">
                  <img
                    className={classes.helloCardImg}
                    src={human}
                    alt="human"
                  />
                  <Typography
                    className={classes.helloCardSubtitle}
                    variant="body1"
                  >
                    Хорошего тебе дня
                  </Typography>
                </Card>
                <Card title="Мои проекты">
                  {projects &&
                    projects.map((p) => (
                      <CardEntry
                        key={p.id}
                        text={p.name}
                        icon={<WorkOutlineIcon fontSize="large" />}
                        link={`/project/${p.id}`}
                      />
                    ))}
                </Card>
                <Card title="Ближайшее мероприятие">
                  <CardEntry text={[
                      <strong className={classes.meetingItem}>19:00</strong>,
                    <span className={classes.meetingItem}>Daily (Zoom)</span>,
                    <span className={classes.meetingItem} style={{color: "gray"}}>4 декабря, 2021</span>
                  ]}>
                    <SmoothButton className={classes.meetingButton} onButtonClick={() => {}} text={"Zoom"}/>
                  </CardEntry>
                </Card>
              </div>
              <div className={classes.column}>
                <Card title="Адаптация">
                  <div className={classes.adaptationContainer}>
                    {adaptationBlocks.map((elem) => (
                      <CardEntry
                        key={elem.id}
                        text={elem.text}
                        icon={elem.icon}
                        link={elem.link}
                      />
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          }
        />
        <Route path="project/:id" element={<Project data={data} />} />
      </Routes>
    </div>
  ) : (
    <div className={classes.authContainer}>
      <Header className="Header" user={user} />
      <SignIn handleLogin={userActions.login} />
    </div>
  );
}

function mapStateToProps() {
  const mapStateToProps = (state) => {
    return {
      user: state.user,
      data: state.data,
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
