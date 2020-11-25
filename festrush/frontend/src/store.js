import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer,productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers';
 
const initialState = {};

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;