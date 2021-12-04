import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import mentorDescription from './assets/mentorDescription.svg';
import SmoothButton from '../SmoothButton';

const useStyles = makeStyles((theme) => ({
  mentorContainer: {
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '60px',
    backgroundColor: 'white',
    height: '100vh',
  },
  containerTitle: {
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
  },
  title: {
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
  },
  breadcrumbs: {
    marginBottom: 30,
  },
  column: {
    borderRight: 'solid 1px lightgrey',
    paddingRight: 40,
    marginBottom: 50,
  },
  columnRight: {
    paddingTop: 55,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  inviteContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
    margin: 50,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Mentor = () => {
  const classes = useStyles();

  return (
    <div className={classes.mentorContainer}>
      <div className={classes.column}>
        <div className={classes.breadcrumbs}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link className={classes.iconContainer} underline="hover" to="/">
              <HomeIcon />
            </Link>
            <Link underline="hover" to="">
              Наставник
            </Link>
          </Breadcrumbs>
        </div>
        <Typography className={classes.containerTitle} variant="h4">
          Наставник
        </Typography>
        <div className={classes.textContainer}>
          <p>
            Наставником называют человека, который передает знания и опыт. Он
            воодушевляет тебя и помогает извлечь максимальную пользу из личных
            ресурсов для саморазвития.
          </p>
          <p>
            У тебя есть возможность получить наиболее подходящего для тебя
            наставника, если ты пройдешь 3 теста на определение твоего
            психотипа. Если ты не хочешь, то можешь отказаться от этого.
          </p>
        </div>
        <div className={classes.imgContainer}>
          <img src={mentorDescription} alt={'m'} width={250} height={250} />
        </div>
      </div>
      <div className={classes.columnRight}>
        <div className={classes.inviteContainer}>
          <p>
            Хочешь ли ты пройти 3 теста, чтобы получить самого подходящего для
            тебя наставника?
          </p>
        </div>
        <div className={classes.buttonsContainer}>
          <SmoothButton text={'Да'} />
          <SmoothButton text={'Нет'} />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
