import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import CheckoutPage from './pages/checkout/CheckoutPage.component';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signIn-and-signUp/SignIn-and-SignUp.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from "./redux/user/userActions";
import {currentUserSelector} from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      
        setCurrentUser(userAuth);
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>        
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>          
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/sign-in' render={() =>
            this.props.currentUser ?
            (<Redirect to="/" />) 
            : (<SignInAndSignUp/>)} />
        </Switch>
      </div>
    )
  };
}

const mapStateTProps = state => ({
  currentUser: currentUserSelector(state),
  collectionsArray: selectCollectionsForPreview(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateTProps, mapDispatchToProps)(App);
