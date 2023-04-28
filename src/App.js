import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGlobalStyle } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import CheckoutPage from './pages/checkout/CheckoutPage.component';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signIn-and-signUp/SignIn-and-SignUp.component';
import { checkUserSession } from './redux/user/userActions';

import { currentUserSelector } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<createGlobalStyle />
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/sign-in'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: currentUserSelector(state),
	collectionsArray: selectCollectionsForPreview(state)
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
