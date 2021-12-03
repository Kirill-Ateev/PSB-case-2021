import { LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import { borderBottom } from '@mui/system';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AdjustIcon from '@mui/icons-material/Adjust';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '60px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  projectBlock: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    paddingBottom: 25,
    marginBottom: 25,
  },
  containerTitle: {
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
  },
  membersContainer: {
    position: 'relative',
    width: '100%',
  },
  columnRight: {
    paddingTop: 74,
  },
  linksContainer: {
      display: 'flex',
      gap: 15
  },
  point: {
marginBottom: '10px !important',
  },
  column: {},
}));

const ProjectBlock = ({ title, icon, children, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.projectBlock}>
      <div className={classes.titleContainer}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </div>
      {children}
    </div>
  );
};

const Project = ({ data: { projects } }) => {
  const classes = useStyles();
  const params = useParams();
  let currentProject;
  if (projects)
    currentProject = projects.find((p) => p.id === Number(params.id));
  else return <LinearProgress />;

  return (
    <div className={classes.projectContainer}>
      <div className={classes.column}>
        <Typography className={classes.containerTitle} variant="h4">
          Карточка проекта
        </Typography>
        <ProjectBlock icon={<EditIcon />} title="Наименование">
          <Typography variant="body1">{currentProject.name}</Typography>
        </ProjectBlock>
        <ProjectBlock icon={<AdjustIcon />} title="Цель">
          <Typography variant="body1">{currentProject.goals}</Typography>
        </ProjectBlock>
        <ProjectBlock icon={<SportsScoreIcon />} title="Результат">
          <Typography variant="body1">{currentProject.results}</Typography>
        </ProjectBlock>
        <ProjectBlock icon={<GroupIcon />} title="Команда проекта">
          <div className={classes.membersContainer}>
            {/* {currentProject.members.map((m) => (<div>
             13</div>
            ))} */}
          </div>
        </ProjectBlock>
      </div>
      <div className={classes.columnRight}>
        <ProjectBlock icon={<AccessTimeIcon />} title="План работ">
          <Typography className={classes.point}>
            <b>Текущий этап</b> Проектирование.
          </Typography>
          <Typography className={classes.point}>
            <b>Результат</b> Интерактивный прототип адаптации ИТ-специалистов
            согласован с владельцем процесса.
          </Typography>
          <Typography>
            <b>Срок окончания</b> до 01.01.2022 года.
          </Typography>
        </ProjectBlock>
        <ProjectBlock icon={<EditIcon />} title="Методологии">
          <Typography>{currentProject.project_type}</Typography>
        </ProjectBlock>
        <ProjectBlock icon={<EditIcon />} title="Ссылки на инструменты">
            <div className={classes.linksContainer}>
          {currentProject.links.map((l) => (
            <a href={l.link}>{l.name}</a>
          ))}</div>
        </ProjectBlock>
      </div>
    </div>
  );
};

export default Project;
