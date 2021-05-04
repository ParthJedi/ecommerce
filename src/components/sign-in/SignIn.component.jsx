import React from 'react';
import './SignIn.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);  
            this.setState({email: '', password: ''})          
        } catch (error) {
            console.log("Error in log in: ", error.message);
        }
        
    }

    render() {
        return (<div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput label="email" required name="email" value={this.state.email} type="email" handleChange={this.handleChange} />
                
                <FormInput label="password" required name="password" value={this.state.password} type="password" handleChange={this.handleChange} />
            <div className="buttons">
                <CustomButton type="submit" onClick={this.handleSubmit}>Sign In</CustomButton>
                <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Google Sign In</CustomButton>
            </div>
            </form>
        </div>);
    }
    
}

export default SignIn;