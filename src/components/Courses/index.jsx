import React from 'react';
import { courseCardData } from '../../constants/constantValues';
import CourseCard from './CourseCard';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  coursesPageContainer: {
    display: 'flex',
    gap: 30,
    paddingTop: 70,
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
    flexDirection: 'column'
  },
  coursesContainer: {
    display: 'flex',
    gap: 20,
  },
  title: {
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
  },
}));

const Courses = () => {
  const classes = useStyles();

  return (
    <div className={classes.coursesPageContainer}>
      <Typography className={classes.title} variant="h4">
        Вводные курсы
      </Typography>
      <div className={classes.coursesContainer}>
        {courseCardData.map((card) => (
          <CourseCard text={card.text} link={card.link} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
