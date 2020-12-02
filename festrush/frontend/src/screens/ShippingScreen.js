import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {saveShipping} from '../actions/cartActions';
import CheckoutWizard from '../components/CheckoutWizard';

function ShippingScreen(props) {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    
    const shipOrder = useSelector(state => state.shipOrder);
    
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({address, city, state, country, postalCode, phone}));
        props.history.push('payment');
    };

    return <div>
        <CheckoutWizard step1 step2></CheckoutWizard>
        <div className="form">
            <form onSubmit={onSubmitHandler}>            
                <ul className="form-container">
                    <li>
                        <h2>Shipping</h2>
                    </li>
                    <li>                    
                    </li>
                    <li>
                        <label htmlFor="address">
                            Adress
                        </label>
                        <textarea name="address" id="address" onChange={(e) => setAddress(e.target.value)}></textarea>
                    </li>
                    <li>
                        <label htmlFor="city">
                            City
                        </label>
                        <textarea name="city" id="city" onChange={(e) => setCity(e.target.value)}></textarea>
                    </li>
                    <li>
                        <label htmlFor="state">
                            State
                        </label>
                        <textarea name="state" id="state" onChange={(e) => setState(e.target.value)}></textarea>
                    </li>
                    <li>
                        <label htmlFor="postalCode">
                            Postal Code
                        </label>
                        <textarea name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}></textarea>
                    </li>
                    <li>
                        <label htmlFor="country">
                            Country
                        </label>
                        <textarea name="country" id="country" onChange={(e) => setCountry(e.target.value)}></textarea>
                    </li> 
                    <li>
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <textarea name="phone" id="phone" onChange={(e) => setPhone(e.target.value)}></textarea>
                    </li>                               
                    <li>
                        <button className="pd-button full-width primary">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
        
}

export default ShippingScreen;