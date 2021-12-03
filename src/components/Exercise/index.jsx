import React from 'react';
import { exercises } from '../../constants/constantValues';
import { makeStyles } from '@mui/styles';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import SmoothButton from '../SmoothButton';

const useStyles = makeStyles((theme) => ({
    exercisesContainer: {
    display: 'flex',
    gap: 40,
    flexDirection: 'column'
  },
  buttonsGroup: {
      display: 'flex',
      justifyContent: 'space-between'
  },
  formControlLabel: {
      marginBottom: 10
  }
}));

const Exercise = ({ questionId }) => {
  const classes = useStyles();
  const currentExercise = exercises.find((e) => e.id === Number(questionId));
  if (!currentExercise) return null;
  return (
    <div className={classes.exercisesContainer}>
      <b>{currentExercise.text}</b>
      <FormGroup className={classes.checkboxes}>
        {currentExercise.variants.map((variant) => (
          <FormControlLabel
            className={classes.formControlLabel}
            key={variant.id}
            control={<Checkbox />}
            label={variant.text}
          />
        ))}
      </FormGroup>
      <div className={classes.buttonsGroup}>
      <SmoothButton text={'Назад'} />
      <SmoothButton text={'Отправить'} />
      </div>
    </div>
  );
};

export default Exercise;
