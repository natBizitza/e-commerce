import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

//to show log only in development
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

//persisted version of our store
export const persistor = persistStore(store);

export default store;


