import axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_DELETE_ITEM, CART_SAVE, SAVE_PAYMENT } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/api/product/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                leftInStock: data.leftInStock,
                qty
            }
        });
        const { cart: { cartItems } } = getState();
        Cookie.set("cartIems", JSON.stringify(cartItems));
        
    } catch (error) {
        console.log(error, error.message);
    }
}

const removeFromCart = (productId) => async (dispatch, getState) => {
    dispatch({type: CART_DELETE_ITEM, payload: productId});  
    const {cart: {cartItems}} = getState();
    Cookie.set("cartIems", JSON.stringify(cartItems));  
}

const saveShipping = (data) => (dispatch) => {
    dispatch({type: CART_SAVE, payload: data});
}

const savePayment = (data) => (dispatch) => {
    dispatch({type: SAVE_PAYMENT, payload: data})
}

export { addToCart, removeFromCart, saveShipping, savePayment };