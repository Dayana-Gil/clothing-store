import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { //stores function to close later
      this.setState({ currentUser: user }); //open subscription as long as component mounted

      console.log(user); //breaks w OPERA [my browser, have to use CHROME]
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //closes subscriptions preventing memory leaks 
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
