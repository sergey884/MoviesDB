import _ from 'lodash';
import {
  GET_FILMS_SUCCESS,
  GET_FILMS_ERROR,
  SEARCH_FILMS_SUCCESS,
  SET_DATA,
} from '<constants>';

export const initialState = {
  moviesList: null,
  searchText: '',
  searchBy: 'TITLE',
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_SUCCESS: {
      const { payload: { data = [] } } = action;
      return {
        ...state,
        moviesList: data,
      };
    }
    case SET_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SEARCH_FILMS_SUCCESS: {
      const { payload: { data } } = action;
      const filmRegExp = new RegExp(state.searchText, 'i');
      const films = _.filter(data, film => filmRegExp.test(film.title));
      console.log('films', films);
      return {
        ...state,
        moviesList: films,
      }; 
    }
    default: return state;
  }
  return state;
};

export default movies;
