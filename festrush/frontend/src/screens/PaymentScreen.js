import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {savePayment} from '../actions/cartActions';
import CheckoutWizard from '../components/CheckoutWizard';

function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');
    
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('/placeorder');
    };

    return <div>
        <CheckoutWizard step1 step2 step3></CheckoutWizard>
        <div className="form">
            <form onSubmit={onSubmitHandler}>            
                <ul className="form-container">
                    <li>
                        <h2>Payment</h2>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}>                           
                            </input>                            
                            <label htmlFor="paymentMethod">
                                PayPal
                            </label>
                        </div>
                    </li>                               
                    <li>
                        <button className="pd-button full-width primary">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
        
}

export default PaymentScreen;