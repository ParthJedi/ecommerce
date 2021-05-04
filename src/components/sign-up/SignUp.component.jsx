import React from 'react';
import './SignUp.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (error) {
            console.log("Error encountered: ", error.message);
        }

        this.setState({email: '', password: ''})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='text' required value={displayName} name="displayName" label="Name" onChange={this.handleChange} />
                    <FormInput type='email' required value={email} name='email' label='Email' onChange={this.handleChange}/>
                    <FormInput type='password' required value={password} name='password' label='Password' onChange={this.handleChange}/>
                    <FormInput type='password' required value={confirmPassword} name='confirmPassword' label='Confirm Password' onChange={this.handleChange}/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>                
            </div>
        )
    }
}

export default SignUp;