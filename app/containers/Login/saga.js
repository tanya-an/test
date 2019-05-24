import { take, call, put } from 'redux-saga/effects';
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';
import { loginRequest } from './actions';
import request from 'utils/request';

// Individual exports for testing
export default function* loginSaga(email, password) {
  const loginUrl = 'localhost:8080/auth/login';
  // See example in containers/HomePage/saga.js

  // return fetch(loginUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ email, password }),
  // })
  //   .then(handleApiErrors)
  //   .then(response => response.json())
  //   .then(json => json)
  //   .catch((error) => { throw error });

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, loginUrl);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
