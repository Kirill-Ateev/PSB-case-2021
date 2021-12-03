import { LinearProgress, Typography, Button } from '@mui/material';
import React, {useState} from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import { borderBottom } from '@mui/system';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AdjustIcon from '@mui/icons-material/Adjust';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ModalCard from '../ModalCard';

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
    display: 'flex',
    flexDirection: 'row',
  },
  memberContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  memberName: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  columnRight: {
    paddingTop: 74,
  },
  linksContainer: {
    display: 'flex',
    gap: 15,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  row: {
    marginBottom: '17px !important',
    display: 'flex',
  },
  point: {
    minWidth: 180,
  },
  button: {
    borderRadius: '45px !important',
    height: '35px !important',
  },
  memberAvatar: {
    borderRadius: '50%',
    height: 60,
    width: 60,
    objectFit: 'cover',
    cursor: 'pointer',
  },
  column: {},
}));

const ProjectBlock = ({
  title,
  icon,
  children,
  text,
  withButton = false,
  onButtonClick = () => {},
}) => {
  const classes = useStyles();
  return (
    <div className={classes.projectBlock}>
      <div className={classes.titleContainer}>
        {icon}
        <Typography variant="h6">{title}</Typography>
        {withButton ? (
          <Button
            className={classes.button}
            onClick={onButtonClick}
            variant="outlined"
          >
            Подробнее
          </Button>
        ) : null}
      </div>
      {children}
    </div>
  );
};

const Project = ({ data: { projects } }) => {
  const classes = useStyles();
  const params = useParams();
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

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
        <ProjectBlock
          withButton
          onButtonClick={() => setIsTeamModalOpen(true)}
          icon={<GroupIcon />}
          title="Команда проекта"
        >
          <div className={classes.membersContainer}>
            {currentProject.members.map((m) => (
              <div className={classes.memberContainer}>
                <img className={classes.memberAvatar} src={m.photo} />
                <Typography className={classes.memberName} variant="body1">
                  {m.name}
                </Typography>
              </div>
            ))}
          </div>
        </ProjectBlock>
        <ModalCard
          open={isTeamModalOpen}
          onClose={() => setIsTeamModalOpen(false)}
          title="Команда проекта"
        >
          Команды
        </ModalCard>
      </div>
      <div className={classes.columnRight}>
        <ProjectBlock withButton icon={<AccessTimeIcon />} title="План работ">
          <div className={classes.planContainer}>
            <div className={classes.row}>
              <Typography className={classes.point}>
                <b>Текущий этап</b>
              </Typography>
              <Typography>Проектирование</Typography>
            </div>
            <div className={classes.row}>
              <Typography className={classes.point}>
                <b>Результат</b>
              </Typography>
              <Typography>
                Интерактивный прототип адаптации ИТ-специалистов согласован с
                владельцем процесса.
              </Typography>
            </div>
            <div className={classes.row}>
              <Typography className={classes.point}>
                <b>Срок окончания</b>
              </Typography>
              <Typography>до 01.01.2022 года.</Typography>
            </div>
          </div>
        </ProjectBlock>
        <ProjectBlock icon={<EditIcon />} title="Методологии">
          <Typography>{currentProject.project_type}</Typography>
        </ProjectBlock>
        <ProjectBlock icon={<EditIcon />} title="Ссылки на инструменты">
          <div className={classes.linksContainer}>
            {currentProject.links.map((l) => (
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href={l.link}
              >
                {l.name}
              </a>
            ))}
          </div>
        </ProjectBlock>
      </div>
    </div>
  );
};

export default Project;
