import React, { useEffect, useState } from 'react';
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
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Routes, Route } from 'react-router-dom';
import Project from './components/Project';
import SmoothButton from './components/SmoothButton';
import { LinearProgressWithLabel } from './components/ProgressBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Courses from './components/Courses';
import Course from './components/Courses/Course';
import Mentor from './components/Mentor';
import PeopleIcon from '@mui/icons-material/People';

// Для входа:
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
    flexDirection: 'column',
  },
  progress: {
    height: '15px !important',
    borderRadius: '5px !important',
  },
  meetingItem: {
    marginRight: 30,
  },
  meetingButton: {
    marginLeft: '-10px',
  },
  checkboxes: {
    marginTop: 15,
  },
  missingMentor: {
    color: 'grey',
    marginTop: 5,
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
  const [balance, setBalance] = useState(100_000_000);
  const [progress, setProgress] = useState(0);
  const [values, setValues] = useState({});

  useEffect(() => {
    if (isLogged) dataActions.getProjects();
    else userActions.checkAuthorized();
  }, [isLogged]);

  if (isLogged === null) return <LinearProgress />;

  return isLogged ? (
    <div className="App">
      <Header
        className="Header"
        user={user}
        userActions={userActions}
        balance={balance}
      />
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
                  <div className={classes.adaptationContainer}>
                    {projects &&
                      projects.map((p) => (
                        <CardEntry
                          key={p.id}
                          text={p.name}
                          icon={<WorkOutlineIcon fontSize="large" />}
                          link={`/project/${p.id}`}
                        />
                      ))}
                  </div>
                </Card>

                <Card title="Ближайшее мероприятие">
                  <CardEntry
                    text={[
                      <strong className={classes.meetingItem}>19:00</strong>,
                      <span className={classes.meetingItem}>Daily (Zoom)</span>,
                      <span
                        className={classes.meetingItem}
                        style={{ color: 'gray' }}
                      >
                        4 декабря, 2021
                      </span>,
                    ]}
                    icon={<EventAvailableIcon fontSize={'large'} />}
                  >
                    <SmoothButton
                      className={classes.meetingButton}
                      onButtonClick={() => {}}
                      text={'Zoom'}
                    />
                  </CardEntry>
                </Card>

                <Card title="Наставник">
                  <CardEntry
                    text={[
                      <span>Сейчас не назначен наставник</span>,
                      <span className={classes.missingMentor}>
                        Чтобы мы подобрали для вас лучшего, пройдите 3
                        психологических теста
                      </span>,
                    ]}
                    icon={<PeopleIcon fontSize="large" />}
                    link={'/mentor/'}
                  />
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
                <Card title="Чек-лист">
                  <LinearProgressWithLabel
                    className={classes.progress}
                    value={40}
                  />
                  <FormGroup className={classes.checkboxes}>
                    <FormControlLabel
                      control={<Checkbox checked />}
                      label="Подписал трудовой договор"
                    />
                    <FormControlLabel
                      control={<Checkbox checked />}
                      label="Отдал документы в отдела кадров"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      disabled
                      label="Получил welcome pack"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      disabled
                      label="Познакомился с коллективом"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      disabled
                      label="Узнал своего наставника"
                    />
                  </FormGroup>
                </Card>
              </div>
            </div>
          }
        />
        <Route path="project/:id" element={<Project data={data} />} />
        <Route path="courses" element={<Courses />} />
        <Route
          path="courses/:id"
          element={
            <Course
              values={values}
              setValues={setValues}
              progress={progress}
              setProgress={setProgress}
              setBalance={setBalance}
              balance={balance}
            />
          }
        />
        <Route
          path="courses/:id/question/:questionId"
          element={
            <Course
              values={values}
              setValues={setValues}
              progress={progress}
              setProgress={setProgress}
              setBalance={setBalance}
              progress={progress}
              setProgress={setProgress}
              setBalance={setBalance}
              balance={balance}
            />
          }
        />
        <Route path="mentor" element={<Mentor />} />
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
