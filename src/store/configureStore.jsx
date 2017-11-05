import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

import sagas from "../sagas";

const development = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middleware = [ thunk, sagaMiddleware ];

if ( development ) {
	const logger = createLogger();
	middleware.push( logger );
}

const configureStore = () => {
	const store = createStore(
					rootReducer,
					applyMiddleware(...middleware)
				);

	sagaMiddleware.run( sagas );

	return store;
}

export default configureStore;