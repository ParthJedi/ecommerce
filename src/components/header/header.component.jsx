import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../images/logo.svg';
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropDown from "../cart-dropdown/CartDropDown.component";

import { hiddenCartSelector } from "../../redux/cart/cart.selectors";
import { currentUserSelector } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/vet'>Veterinary</Link>
                <Link className="option" to='/contact'>Contact</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                    :
                    <Link className="option" to='/sign-in'>Sign In</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropDown /> }            
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: currentUserSelector(state),
    hidden: hiddenCartSelector(state)
})

export default connect(mapStateToProps)(Header);
