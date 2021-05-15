import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga/RootSaga';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import RootReducer from './root-reducer/RootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);