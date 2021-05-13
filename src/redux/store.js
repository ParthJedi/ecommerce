import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import RootReducer from './root-reducer/RootReducer';

const middleWares = [thunk  ];

if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);