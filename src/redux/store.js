import { applyMiddleware, createStore } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import RootReducer from './root-reducer/RootReducer';

const middleWares = [logger]

export const store = createStore(RootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);