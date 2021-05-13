// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const ShopReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START: return {
            ...state,
            isFetching: true
        }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: return {
            ...state,
            isFetching: false,
            collections: action.payload
        }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE: return {
            collections: null,
            isFetching: false,
            errorMessage: undefined

        }

        case ShopActionTypes.UPDATE_COLLECTIONS: return {
            ...state,
            collections: action.payload
        };
        default: return state;
    }
}

export default ShopReducer;