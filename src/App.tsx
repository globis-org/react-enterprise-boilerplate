import * as React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import Home from './components/Home';
import Globis from './containers/Globis';
import SearchUsers from './containers/SearchUsers';

// const logo = require('./logo.svg');
import * as logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/globis" component={Globis} />
          <Route path="/search-users" component={SearchUsers} />
        </Switch>
      </div>
    );
  }
}

export default App;
