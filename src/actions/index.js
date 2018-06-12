import {
  GET_FILMS_SUCCESS,
  GET_FILMS_START,
  GET_FILMS_ERROR,
  SET_DATA,
  SEARCH_FILMS_START,
  SEARCH_FILMS_SUCCESS,
} from '<constants>';

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

export const setData = payload => ({
  type: SET_DATA,
  payload,
});

export const getAllFilmsApi = () => {
  const url = 'http://react-cdp-api.herokuapp.com/movies/';

  return fetch(url)
    .then(response => response.json());
};

export const searchFilmsStart = () => ({
  type: SEARCH_FILMS_START,
});

export const searchFilmsSuccess = payload => ({
  type: SEARCH_FILMS_SUCCESS,
  payload,
});

export const getAllFilmsApiByLimit = () => {
  const url = 'http://react-cdp-api.herokuapp.com/movies/?limit=1000';

  return fetch(url)
    .then(response => response.json());
};
