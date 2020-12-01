import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../actions/userActions';

function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
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
                    <h2>Create account</h2>
                </li>
                <li>
                    {loading && <div>Loading..</div>}
                    {error && <div>{error.message}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
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
                    <label htmlFor="rePassword">
                        Re-Enter Password
                    </label>
                    <input type="password" name="rePassword" id="rePassword" onChange={(e) => setRePassword(e.target.value)}></input>
                </li>
                <li>
                    <button className="pd-button full-width primary">Register</button>
                </li>
                <li>Already have an account? <Link to="/signin">Sign-in</Link></li>
            </ul>
        </form>
    </div>
        
}

export default RegisterScreen;