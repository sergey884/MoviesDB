import { GET_FILMS_SUCCESS, GET_FILMS_ERROR } from '<constants>';

const initialState = {
	moviesList: null,
};

const movies = (state = initialState, action) => {
	switch(action.type) {
		case GET_FILMS_SUCCESS:
			const { payload: { data = [] } } = action;
			return {
				...state,
				moviesList: data,
			};
		default: return state;
	}
	return state;
}

export default movies;