import React from 'react';

import HomePage from './pages/homepage/homepage.component';

import { Switch, Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
  <div>
    <h1> HAT PAGE </h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop/hats' component={ HatsPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
