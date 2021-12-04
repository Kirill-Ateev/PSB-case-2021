import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import Api from '../api/api';
import * as types from '../constants/actionTypes';

export function* login(action) {
  try {
    const response = yield call(Api.post, 'auth/jwt/create', {
      data: {
        email: action.email,
        password: action.password,
      },
    });

    if (response.access) {
      localStorage.setItem('token', response.access);
      const responseUserData = yield call(Api.get, 'auth/users/me/');

      yield put({
        type: types.RECEIVE_USER,
        id: responseUserData.id,
        email: responseUserData.email,
        rating: responseUserData.rating,
        group: responseUserData.group,
      });
    }
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* checkAuthorized(action) {
  try {
    const response = yield call(Api.get, 'auth/users/me/');

    yield put({
      type: types.RECEIVE_USER,
      id: response.id,
      email: response.email,
      rating: response.rating,
      group: response.group,
    });
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* requestProfile(action) {
  try {
    const response = yield call(Api.get, 'profile');

    if (response.id) {
      yield put({
        type: types.RECEIVE_USER,
        id: response.id,
        email: response.email,
        isActivated: response.isActivated,
      });
    }
    //TODO: redirect to registration form
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* logout(action) {
  try {
    localStorage.removeItem('token');
    yield put({
      type: types.CLEAR_USER,
    });
  } catch (error) {
    yield put({
      type: types.NOT_CLEAR_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export default function* watchUsers() {
  yield takeEvery(types.LOGIN, login);
  yield takeEvery(types.CHECK_AUTHORIZED, checkAuthorized);
  yield takeEvery(types.REQUEST_USER, requestProfile);
  yield takeEvery(types.LOGOUT, logout);
}
