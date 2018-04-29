import { takeLatest, call, all, put } from 'redux-saga/effects';
import { GET_FILMS_START } from '../constants';
import { getAllFilmsApi, getFilmsSuccess } from '../actions';

export function* getFilms() {
	const allFilms = yield call(getAllFilmsApi);
	yield put(getFilmsSuccess(allFilms));
}

export function* watchFilms() {
	yield takeLatest(GET_FILMS_START, getFilms);
}

export default function* rootSaga() {
	yield all([
		watchFilms(),
	]);
}