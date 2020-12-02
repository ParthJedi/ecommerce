import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import CheckoutWizard from '../components/CheckoutWizard';

function PlaceOrderScreen(props) {    
    const cart = useSelector(state => state.cart);

    const { cartItems, shipping, payment } = cart;
    
    if(!shipping.address) {
        props.history.push('/shipping');
    } else if(!payment.paymentMethod) {
        props.history.push('/payment');
    };

    const itemsPrice = cartItems.reduce((a,c) => a + c.price*c.qty, 0);
    const shippingPrice = itemsPrice > 1000 ? 0: 10;
    const taxPrice = 0.15*itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;
    

    const dispatch = useDispatch();

    const placeOrderHandler = () => {

    };

    useEffect(() => {
                
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    };

    return <div>
        <CheckoutWizard step1 step2 step3 step4></CheckoutWizard>
            <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h3>Shipping</h3>
                    <div>
                        {shipping.address}, {shipping.city},
                        {shipping.state}, {shipping.postalCode}, {shipping.country}
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {payment.paymentMethod}
                    </div>
                </div>
                <div>
                    <ul className="cart-list-container">
                        <li key={Math.random()}>
                            <h3>
                                Shopping Cart
                            </h3>
                            <div>
                                Price
                            </div>
                        </li>
                        
                        {
                            cartItems.length === 0 ?
                            <div>Cart is Empty. <Link className="info-links" to="/">Continue Shopping..</Link></div>
                            :                    
                            cartItems.map(item => {
                                return <li key={item.product}>
                                    <div className="cart-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>                            
                                    <div className="cart-name">
                                        <div>
                                            <Link className="info-links" to={"/product/" + item.product }>
                                                {item.name}
                                            </Link> 
                                        </div>
                                        <div>
                                            Qty: {item.qty}                                                                                     
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        ${item.price}
                                    </div>
                                </li>
                            })
                            
                        }
                        
                    </ul>
                </div>
            </div>
            <div className="placeorder-action">
                    <ul>
                        <li>
                            <button className="pd-button checkout-btn full-width primary" onClick={placeOrderHandler}>Place Order</button>
                        </li>
                        <li>
                            <h3>Order Summary</h3>
                        </li>
                        <li>
                            <div>Items</div>
                            <div>{itemsPrice}</div>
                        </li>
                        <li>
                            <div>Shipping</div>
                            <div>{shippingPrice}</div>
                        </li>
                        <li>
                            <div>Tax</div>
                            <div>{taxPrice}</div>
                        </li>
                        <li>
                            <div>Order Total</div>
                            <div>{totalPrice}</div>
                        </li>
                    </ul>                   
                    <br /><br />
                    <button className="pd-button checkout-btn full-width"><Link className="info-links" to="/">Continue Shopping</Link></button>             
            </div>       
        </div>
    </div>
}

export default PlaceOrderScreen;