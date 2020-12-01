import axios from 'axios';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS, PRODUCT_SAVE, PRODUCT_SAVE_ERROR, PRODUCT_SAVE_SUCCESS } = require("../constants/productConstants");


const listProdcuts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch(error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }    
};

const detailsOfProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/api/product/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }    
};

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_SAVE, payload: product});
        const {userSignin: {userInfo}} = getState();
        const {data} = await axios.post('/api/products', product, {
            headers: {
                'Authorization': 'Bearer ' + userInfo.token
            }
        });
        dispatch({
            type: PRODUCT_SAVE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_SAVE_ERROR,
            payload: error.message
        })
    }
}

export { listProdcuts, detailsOfProduct, saveProduct };