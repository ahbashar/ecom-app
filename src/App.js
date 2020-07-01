import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import Header from './components/header/header';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
	/*constructor(props){
		super(props);

		this.state = {
			currentUser: null
		}
	}*/

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;


	    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
	      if (userAuth) {
	        const userRef = await createUserProfileDocument(userAuth);

	        userRef.onSnapshot(snapShot => {
	          setCurrentUser({
	            currentUser: {
	              id: snapShot.id,
	              ...snapShot.data()
	            }
	          });

	        });
	      }

	      setCurrentUser(userAuth);
	    });
  }

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}
	render(){	
	  return (
	    <div>
	    	<Header /*currentUser={this.state.currentUser}*//>
		    <Switch>
		      <Route exact path='/' component={HomePage}/>
		      <Route exact path='/shop' component={ShopPage}/>
		      <Route
		       exact
		       path='/signin'
		       render={() =>
		       	this.props.currentUser?( 
		       		<Redirect to='/' />
		       	) :(
		       		<SignInAndSignUp />
		       	  )
		       	}
		       />
		    </Switch>
	    </div>
	  );
	}
}
 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user=> dispatch(setCurrentUser(user)) 
})

export default connect(
	mapStateToProps,
	 mapDispatchToProps
)(App);
