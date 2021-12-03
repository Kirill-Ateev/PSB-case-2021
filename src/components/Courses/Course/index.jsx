import React from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
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

const useStyles = makeStyles((theme) => ({
  courseContainer: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    backgroundColor: 'white',
  },
  progress: {
    height: '15px !important',
    borderRadius: '5px !important',
  },
  sidebar: {
    borderRight: '1px solid #DCDCDC'
  },
  courseProgress: {

  },
  progressTitle: {
    fontWeight: 'bold',
  }
}));

const Course = () => {
  const classes = useStyles();

  return (
    <div className={classes.courseContainer}>
      <div className={classes.sidebar}>
        <div className={classes.courseProgress}>
        <Typography className={classes.progressTitle}>Прогресс по курсу:</Typography>
        <LinearProgressWithLabel className={classes.progress} value={40} />
        </div>
      <List component="nav">
      <ListItemButton>
          <ListItemText primary={<b>1. Введение</b>} />
          {true ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton >
              <ListItemText primary="1.1 Основа корпоративной культуры" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="1.2 Три правила" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="1.3 Практика" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary={<b>2. Первое правило: Широта взглядов</b>} />
          {true ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton >
              <ListItemText primary="2.1 Конкурентные преимущества" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="2.2 Поддержание безопасности" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="2.3 Приоритеты и риски" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="2.4 Тренды индустрии" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary={<b>3. Первое правило: Широта взглядов</b>} />
          {true ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton >
              <ListItemText primary="3.1 Конкурентные преимущества" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="3.2 Поддержание безопасности" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="3.3 Приоритеты и риски" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="3.4 Тренды индустрии" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      </div>
      <div>main</div>
    </div>
  );
};

export default Course;
