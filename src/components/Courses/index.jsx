import React from 'react';
import { courseCardData } from '../../constants/constantValues';
import CourseCard from './CourseCard';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  coursesContainer: {
    display: 'flex',
    gap: 20,
    paddingTop: 'min(140px, 8%)',
    paddingLeft: 'min(140px, 8%)',
    paddingRight: 'min(140px, 8%)',
  },
  title: {
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
  },
}));

const Courses = () => {
  const classes = useStyles();

  return (
    <div className={classes.coursesContainer}>
      <Typography className={classes.title} variant="h4">
        Вводные курсы
      </Typography>
      {courseCardData.map((card) => (
        <CourseCard text={card.text} link={card.link} />
      ))}
    </div>
  );
};

export default Courses;
