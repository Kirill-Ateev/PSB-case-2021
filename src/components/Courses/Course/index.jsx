import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { LinearProgressWithLabel } from '../../ProgressBar';
import { Link } from 'react-router-dom';
import Exercise from '../../Exercise';
import { exercises } from '../../../constants/constantValues';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const useStyles = makeStyles((theme) => ({
  courseContainer: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1.5fr 3fr',
    gridTemplateRows: '95px 125px',
    backgroundColor: 'white',
    minHeight: 'calc(100vh - 80px)',
  },
  progress: {
    height: '15px !important',
    borderRadius: '5px !important',
  },
  sidebar: {
    borderRight: '1px solid #DCDCDC',
  },
  courseProgress: {
    paddingLeft: '30px',
    paddingRight: '25px',
    borderBottom: '1px solid #DCDCDC',
    paddingBottom: 30,
  },
  progressTitle: {
    fontWeight: 'bold !important',
    paddingBottom: 10,
  },
  main: {
    padding: '40px 100px',
  },
  activeButton: {
    color: '#009fda !important',
  },
  title: {
    fontWeight: 'bold !important',
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Course = ({
  values,
  setValues,
  balance,
  setBalance,
  progress,
  setProgress,
}) => {
  const classes = useStyles();
  const { id, questionId } = useParams();
  const [open, setOpen] = useState({});

  return (
    <div className={classes.courseContainer}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link className={classes.iconContainer} underline="hover" to="/">
          <HomeIcon />
        </Link>
        <Link underline="hover" to="/courses">
          Вводные курсы
        </Link>
        <Link underline="hover" to="">
          Курс
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" className={classes.title}>
        Вводный курс по разработке платформы онбординга новых сотрудников
      </Typography>
      <div className={classes.sidebar}>
        <div className={classes.courseProgress}>
          <Typography className={classes.progressTitle}>
            Прогресс по курсу:
          </Typography>
          <LinearProgressWithLabel
            className={classes.progress}
            value={progress}
          />
        </div>
        {/* TODO: refactor this with data from backend or with map() */}
        <List component="nav">
          <ListItemButton onClick={() => setOpen({ ...open, q1: !open.q1 })}>
            <ListItemText primary={<b>1. Коммуникация и задачи</b>} />
            {open.q1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.q1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                className={questionId === '1' ? classes.activeButton : ''}
                to={`/courses/${id}/question/1`}
              >
                <ListItemButton>
                  <ListItemText primary="1.1 Вопрос" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '2' ? classes.activeButton : ''}
                to={`/courses/${id}/question/2`}
              >
                <ListItemButton>
                  <ListItemText primary="1.2 Вопрос" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '3' ? classes.activeButton : ''}
                to={`/courses/${id}/question/3`}
              >
                <ListItemButton>
                  <ListItemText primary="1.3 Вопрос" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => setOpen({ ...open, q2: !open.q2 })}>
            <ListItemText primary={<b>2. Методология и стэк</b>} />
            {open.q2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.q2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                className={questionId === '4' ? classes.activeButton : ''}
                to={`/courses/${id}/question/4`}
              >
                <ListItemButton>
                  <ListItemText primary="2.1 Вопрос" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '5' ? classes.activeButton : ''}
                to={`/courses/${id}/question/5`}
              >
                <ListItemButton>
                  <ListItemText primary="2.2 Вопрос" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '6' ? classes.activeButton : ''}
                to={`/courses/${id}/question/6`}
              >
                <ListItemButton>
                  <ListItemText primary="2.3 Практика" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '7' ? classes.activeButton : ''}
                to={`/courses/${id}/question/7`}
              >
                <ListItemButton>
                  <ListItemText primary="2.4 Тренды индустрии" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => setOpen({ ...open, q3: !open.q3 })}>
            <ListItemText primary={<b>3. Цели и план работ</b>} />
            {open.q3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.q3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                className={questionId === '8' ? classes.activeButton : ''}
                to={`/courses/${id}/question/8`}
              >
                <ListItemButton>
                  <ListItemText primary="3.1 Вопрос" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '9' ? classes.activeButton : ''}
                to={`/courses/${id}/question/9`}
              >
                <ListItemButton>
                  <ListItemText primary="3.2 Практика" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '10' ? classes.activeButton : ''}
                to={`/courses/${id}/question/10`}
              >
                <ListItemButton>
                  <ListItemText primary="3.3 Практика" />
                </ListItemButton>
              </Link>
              <Link
                className={questionId === '11' ? classes.activeButton : ''}
                to={`/courses/${id}/question/11`}
              >
                <ListItemButton>
                  <ListItemText primary="3.4 Практика" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </div>
      <div className={classes.main}>
        {questionId ? (
          <Exercise
            values={values}
            setValues={setValues}
            questionId={questionId}
            progress={progress}
            setProgress={setProgress}
            setBalance={setBalance}
            balance={balance}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Course;
