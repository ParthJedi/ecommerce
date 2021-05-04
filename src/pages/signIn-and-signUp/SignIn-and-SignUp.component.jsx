import React from 'react';
import './SignIn-and-SignUp.style.scss';
import SignIn from '../../components/sign-in/SignIn.component'
import SignUp from '../../components/sign-up/SignUp.component';

const SignInAndSignUp = () => {
    return (
        <div className="signIn-and-signUp">
            <SignIn />
            <SignUp />
        </div>

    )
}

export default SignInAndSignUp;