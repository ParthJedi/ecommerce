import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
 import CustomButton from "../custom-button/custom-button.component";
 import CartItem from "../cart-item/CartItem.component";
 import { selectCartItems } from "../../redux/cart/cart.selectors";
 import { createStructuredSelector } from 'reselect';
 import { toggleCartView } from '../../redux/cart/cart.actions';

 import './CartDropDown.style.scss';

 const CartDropDown = ({cartItems, history, dispatch}) => (
     <div className="cart-dropdown">
         {  cartItems.length ?             
             (<div>
             <div className="cart-items">
             {
                 cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
             }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartView());
                }}>Go to Checkout</CustomButton>
            </div>
            )
            :
            <span className="empty-message">Your cart is empty :(</span>
         }                  
     </div>
 )

 const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
 })

 export default withRouter(connect(mapStateToProps)(CartDropDown));