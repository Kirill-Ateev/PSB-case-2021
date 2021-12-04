import React, { useEffect, useState } from 'react';
import { PROGRESS_STEP, COIN_STEP } from '../../constants/constantValues';
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
import { bindActionCreators } from 'redux';
import * as dataActions from '../../actions/data';
import { connect } from 'react-redux';

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
  img: {
    width: '50%',
    margin: 'auto',
  },
}));

const Exercise = ({
  values,
  setValues,
  questionId,
  progress,
  setProgress,
  setBalance,
  balance,
  data: { courses },
  dataActions: { updateCourse },
}) => {
  const classes = useStyles();

  const currentExercise = courses[0].data.find(
    (e) => e.id === Number(questionId)
  );
  if (!currentExercise) return null;

  const validate = (questionId) => {
    switch (questionId) {
      case '1':
        if (values['1'] && !values['2'] && !values['3']) {
          updateCourse(1, 1, true);
          setProgress(progress + PROGRESS_STEP);
          setBalance(balance + COIN_STEP);
        } else updateCourse(1, 1, false);
        break;
      case '2':
        if (values['4'] && !values['5'] && !values['6']) {
          updateCourse(1, 2, true);
          setProgress(progress + PROGRESS_STEP);
          setBalance(balance + COIN_STEP);
        } else updateCourse(1, 2, false);
        break;
      case '3':
        if (!values['7'] && values['8'] && !values['9']) {
          updateCourse(1, 3, true);
          setProgress(progress + PROGRESS_STEP);
          setBalance(balance + COIN_STEP);
        } else updateCourse(1, 3, false);
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
                disabled={currentExercise.state}
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
      {currentExercise.state === true ? (
        <Alert>{currentExercise.correct}</Alert>
      ) : null}
      {currentExercise.state === false ? (
        <Alert severity="error">{currentExercise.incorrect}</Alert>
      ) : null}
      <div className={classes.buttonsGroup}>
        <NavLink
          to={`/courses/1/question/${Math.max(Number(questionId) - 1, 1)}`}
        >
          <SmoothButton text={'Назад'} />
        </NavLink>
        {currentExercise.state === true ? (
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
      <img className={classes.img} src={currentExercise.photo} />
    </div>
  );
};

function mapStateToProps() {
  const mapStateToProps = (state) => {
    return {
      data: state.data,
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
