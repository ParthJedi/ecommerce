import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {signin} from '../actions/userActions';

function SiginScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    };

    useEffect(() => {
        if(userInfo) {
            props.history.push('/')
        }
        return () => {
            //
        }
    }, [userInfo])

    return <div className="form">
        <form onSubmit={onSubmitHandler}>            
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading..</div>}
                    {error && <div>{error.message}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button className="pd-button full-width primary">Sign in</button>
                </li>
                <li>New to Festrush?</li>
                <li>
                    <Link to="/register" className="pd-button secondary text-center full-width">Create your account</Link>
                </li>
                <li></li>
            </ul>
        </form>
    </div>
        
}

export default SiginScreen;