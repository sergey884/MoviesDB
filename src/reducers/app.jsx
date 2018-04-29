import { GET_FILMS_SUCCESS, GET_FILMS_ERROR } from '../constants';

const initialState = {
	films: null,
};

const app = (state = initialState, action) => {
	switch(action.type) {
		case GET_FILMS_SUCCESS:
			return {
				...state,
				films: action.payload,
			};
		default: return state;
	}
	return state;
}

export default app;