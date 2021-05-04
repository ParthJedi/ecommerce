import React from 'react';
import './CartIcon.style.scss';
import {ReactComponent as ShoppingBagIcon } from '../../images/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartView } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartView, itemCount}) => (
    <div className="cart-icon" onClick={() => toggleCartView()}>
        <ShoppingBagIcon className="shopping-icon" />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartView: () => dispatch(toggleCartView())
})

const mapStateTProps = createStructuredSelector({
    itemCount: selectCartItemsCount
 }) 

export default connect(mapStateTProps, mapDispatchToProps)(CartIcon);

