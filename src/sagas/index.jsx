import { takeLatest, call, all, put } from 'redux-saga/effects';
import { GET_FILMS_START, SEARCH_FILMS_START } from '../constants';
import { getAllFilmsApiByLimit, getAllFilmsApi, getFilmsSuccess, searchFilmsSuccess } from '../actions';

export function* getFilms() {
  const allFilms = yield call(getAllFilmsApi);
  yield put(getFilmsSuccess(allFilms));
}

export function* searchFilms() {
  const searchFilmsJson = yield call(getAllFilmsApiByLimit);
  yield put(searchFilmsSuccess(searchFilmsJson));
}

export function* watchFilms() {
  yield takeLatest(GET_FILMS_START, getFilms);
}

export function* watchSearchFilms() {
  yield takeLatest(SEARCH_FILMS_START, searchFilms);
}

export default function* rootSaga() {
  yield all([
    watchFilms(),
    watchSearchFilms(),
  ]);
}
