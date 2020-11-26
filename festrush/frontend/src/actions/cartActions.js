import axios from "axios";
import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {
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
        
    } catch (error) {
        console.log(error, error.message);
    }
}

const removeFromCart = (productId) => async (dispatch) => {
    dispatch({type: CART_DELETE_ITEM, payload: productId});

}

export { addToCart, removeFromCart };