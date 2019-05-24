import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS } from 'containers/App/constants';
import request from 'utils/request';
import { loadPostsSuccess, loadPostsError } from '../App/actions';

const API_BASE_ADDRESS = 'http://localhost:8080';

function* fetchPosts() {
  const requestURL = `${API_BASE_ADDRESS}/posts`;
  try {
    const posts = yield call(request, requestURL);
    yield put(loadPostsSuccess(posts));
  } catch (err) {
    yield put(loadPostsError(err));
  }
}

export default function* postsPage() {
  yield takeLatest(LOAD_POSTS, fetchPosts);
}
