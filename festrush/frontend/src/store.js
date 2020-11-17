import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'thunk';
 
const initialState = {};

const reducer = combineReducers({
    productList : productListReducer
});

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;