import { GET_FILMS_SUCCESS, GET_FILMS_START, GET_FILMS_ERROR } from '<constants>';

export const getFilmsStart = () => ({
  type: GET_FILMS_START,
});

export const getFilmsSuccess = payload => ({
  type: GET_FILMS_SUCCESS,
  payload,
});

export const getFilmsError = payload => ({
  type: GET_FILMS_ERROR,
  payload,
});

export const getAllFilmsApi = () => {
  const url = 'http://react-cdp-api.herokuapp.com/movies/';

  return fetch(url)
    .then(response => response.json());
};
