import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import './App.css';
import { Globis } from './components/Globis';

const logo = require('./logo.svg');

class App extends React.Component {
  store = createStore();

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BrowserRouter>
          <Route path="/globis" component={Globis} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
