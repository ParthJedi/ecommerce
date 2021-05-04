import React from 'react';
import { connect } from 'react-redux';
import {removeItem, addItem, removeItemCheckout} from '../../redux/cart/cart.actions';
import './checkout-item.style.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItemCheckout}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div onClick={() => removeItemCheckout(cartItem)} className="arrow">&#10094;</div>
                <div className="value">{quantity}</div>
            <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
        </span>
        <span className="price">&#8377; {price}</span>
        <span onClick={() => clearItem(cartItem)} className="remove-button">&#x2715;</span>    
    </div>)
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItemCheckout: item => dispatch(removeItemCheckout(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);