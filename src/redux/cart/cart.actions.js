import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartView = () => ({
    type: CART_ACTION_TYPES.TOGGLE_CART_VIEW
})

export const addItem = (item) => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    payload: item
})

export const removeItemCheckout = (item) => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM_CHECKOUT,
    payload: item
})

export const clearCart = () => ({
    type: CART_ACTION_TYPES.CLEAR_CART
})