import { LinearProgress, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import { borderBottom } from '@mui/system';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AdjustIcon from '@mui/icons-material/Adjust';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ModalCard from '../ModalCard';
import SmoothButton from '../SmoothButton'

import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '60px',
    backgroundColor: 'white'
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
  projectBlockLast: {
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
    justifyContent: 'space-around',
  },
  membersModalContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 25,
    marginBottom: 40,
  },
  memberContainer: {
    display: 'flex',
    marginTop: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  memberModalContainer: {
    display: 'flex',
    marginTop: 5,
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 170,
  },
  memberName: {
    marginTop: 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  columnRight: {
    paddingTop: 74,
  },
  linksContainer: {
    display: 'flex',
    gap: 15,
  },
  docsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
    gridRowGap: 15
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
  memberRole: {
    fontSize: '15px !important',
    marginBottom: `-7px !important`,
    marginTop: `15px !important`,
  },
  modalContainer: {
    minWidth: 780,
  },
  modalSubtitle: {
    marginBottom: '18px !important',
  },
  column: {},
  breadcrumbs: {
    marginBottom: 30
  },
    iconContainer: {
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const ProjectBlock = ({
  title,
  icon,
  children,
  text,
  withButton = false,
  last = false,
  onButtonClick = () => {},
}) => {
  const classes = useStyles();
  return (
    <div className={last ? classes.projectBlockLast : classes.projectBlock}>
      <div className={classes.titleContainer}>
        {icon}
        <Typography variant="h6">{title}</Typography>
        {withButton ? (
            <SmoothButton onButtonClick={onButtonClick} text={"Подробнее"}/>
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

  const projectDocs = [
    "Техническое задание - код",
    "Техническое задание - дизайн",
    "Архитектура проекта",
    "Карта коммуникаций (по RACI)"
  ];

  let currentProject;
  if (projects)
    currentProject = projects.find((p) => p.id === Number(params.id));

  else return <LinearProgress />;

  return (
    <div className={classes.projectContainer}>
      <div className={classes.column}>

        <div className={classes.breadcrumbs}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small"/>}
                aria-label="breadcrumb"
            >
              <Link className={classes.iconContainer}
                    underline="hover" to="/">
              <HomeIcon/>
              </Link>
              <Link underline="hover" to="">
              Карточка проекта
              </Link>

            </Breadcrumbs>
        </div>

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
          // last
          onButtonClick={() => setIsTeamModalOpen(true)}
          icon={<GroupIcon />}
          title="Команда проекта"
        >
          <div className={classes.membersContainer}>
            {currentProject.members.slice(0, 4).map((m) => (
              <div className={classes.memberContainer}>
                <img className={classes.memberAvatar} src={m.photo} />

                <div className={classes.memberName}>
                  <Typography variant="body1">
                    {m.name.split(' ')[0]}
                  </Typography>
                  <Typography variant="body1">
                    {m.name.split(' ')[1]}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </ProjectBlock>
        <ModalCard
          open={isTeamModalOpen}
          onClose={() => setIsTeamModalOpen(false)}
          title="Команда проекта"
        >
          <div className={classes.modalContainer}>
            <Typography className={classes.modalSubtitle} variant="h6">
              Руководство
            </Typography>
            <div className={classes.membersModalContainer}>
              {currentProject.members.slice(0, 2).map((m) => (
                <div className={classes.memberModalContainer}>
                  <img className={classes.memberAvatar} src={m.photo} />
                  <Typography className={classes.memberRole} variant="h6">
                    {m.role}
                  </Typography>
                  <div className={classes.memberName}>
                    <Typography variant="body1">
                      {`${m.name.split(' ')[0]} ${m.name.split(' ')[1][0]}.`}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <Typography className={classes.modalSubtitle} variant="h6">
              Команда разработки и тестирования
            </Typography>
            <div className={classes.membersModalContainer}>
              {currentProject.members.slice(2, 4).map((m) => (
                <div className={classes.memberModalContainer}>
                  <img className={classes.memberAvatar} src={m.photo} />
                  <Typography className={classes.memberRole} variant="h6">
                    {m.role}
                  </Typography>
                  <div className={classes.memberName}>
                    <Typography variant="body1">
                      {`${m.name.split(' ')[0]} ${m.name.split(' ')[1][0]}.`}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <Typography className={classes.modalSubtitle} variant="h6">
              Команда внедрения
            </Typography>
            <div className={classes.membersModalContainer}>
              {currentProject.members.slice(0, 4).map((m) => (
                <div className={classes.memberModalContainer}>
                  <img className={classes.memberAvatar} src={m.photo} />
                  <Typography className={classes.memberRole} variant="h6">
                    {m.role}
                  </Typography>
                  <div className={classes.memberName}>
                    <Typography variant="body1">
                      {`${m.name.split(' ')[0]} ${m.name.split(' ')[1][0]}.`}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalCard>
        <ProjectBlock
            last
            title={"Документы"}
            icon={<EditIcon/>}
        >
          <div className={classes.docsContainer}>
            {projectDocs.map(doc =>
                <a href="" key={projectDocs.indexOf(doc)}>{doc}</a>)}
          </div>
        </ProjectBlock>
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
        <ProjectBlock
            last
            title={"Стек проекта"}
            icon={<EditIcon/>}
        >
          <div className={classes.linksContainer}>
            Django, React, Redux
          </div>
        </ProjectBlock>
      </div>
    </div>
  );
};

export default Project;
