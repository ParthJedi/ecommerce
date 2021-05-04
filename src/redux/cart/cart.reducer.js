import { CART_ACTION_TYPES } from "./cart.types";
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_VIEW : {
            return {
                ...state,
                hidden: !state.hidden
            }
        }

        case CART_ACTION_TYPES.ADD_ITEM : {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }

        case CART_ACTION_TYPES.REMOVE_ITEM : {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }
        
        case CART_ACTION_TYPES.REMOVE_ITEM_CHECKOUT : {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        }

        default: return state;
            
    }
}

export default cartReducer;