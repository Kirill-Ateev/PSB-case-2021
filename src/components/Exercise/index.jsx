import React, { useEffect, useState } from 'react';
import {
  exercises,
  PROGRESS_STEP,
  COIN_STEP,
} from '../../constants/constantValues';
import { makeStyles } from '@mui/styles';
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
} from '@mui/material';
import SmoothButton from '../SmoothButton';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  exercisesContainer: {
    display: 'flex',
    gap: 40,
    flexDirection: 'column',
  },
  buttonsGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formControlLabel: {
    marginBottom: 10,
  },
}));

const Exercise = ({
  questionId,
  progress,
  setProgress,
  setBalance,
  balance,
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({});
  const [hint, setHint] = useState({ id: null, state: null });
  const currentExercise = exercises.find((e) => e.id === Number(questionId));
  if (!currentExercise) return null;

  const validate = (questionId) => {
    switch (questionId) {
      case '1':
        if (values['1'] && !values['2'] && !values['3']) {
          setHint({ id: 1, state: true });
          setProgress(progress + PROGRESS_STEP);
          setBalance(balance + COIN_STEP);
        } else setHint({ id: 1, state: false });
        break;
      case '2':
        if (values['4'] && !values['5'] && !values['6']) {
          setHint({ id: 2, state: true });
          setProgress(progress + PROGRESS_STEP);
          setBalance(balance + COIN_STEP);
        } else setHint({ id: 2, state: false });
        break;
      case '3':
        if (!values['7'] && values['8'] && !values['9']) {
          setHint({ id: 3, state: true });
          setProgress(progress + PROGRESS_STEP);
          setBalance(balance + COIN_STEP);
        } else setHint({ id: 3, state: false });
        break;
      default:
        return;
    }
  };

  return (
    <div className={classes.exercisesContainer}>
      <b>{currentExercise.text}</b>
      <FormGroup className={classes.checkboxes}>
        {currentExercise.variants.map((variant) => (
          <FormControlLabel
            className={classes.formControlLabel}
            key={variant.id}
            control={
              <Checkbox
                disabled={hint.id === currentExercise.id && hint.state === true}
                checked={values[variant.id]}
                onClick={() =>
                  setValues({ ...values, [variant.id]: !values[variant.id] })
                }
              />
            }
            label={variant.text}
          />
        ))}
      </FormGroup>
      {hint.id === currentExercise.id && hint.state === true ? (
        <Alert>{currentExercise.correct}</Alert>
      ) : null}
      {hint.id === currentExercise.id && hint.state === false ? (
        <Alert severity="error">{currentExercise.incorrect}</Alert>
      ) : null}

      <div className={classes.buttonsGroup}>
        <NavLink to={`/courses/1/question/${Number(questionId) - 1}`}>
          <SmoothButton text={'Назад'} />
        </NavLink>
        {hint.id === currentExercise.id && hint.state === true ? (
          <NavLink to={`/courses/1/question/${Number(questionId) + 1}`}>
            <SmoothButton text={'Продолжить'} />
          </NavLink>
        ) : (
          <SmoothButton
            text={'Проверить'}
            onButtonClick={() => validate(questionId)}
          />
        )}
      </div>
    </div>
  );
};

export default Exercise;
