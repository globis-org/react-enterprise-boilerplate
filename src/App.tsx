import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'components/Home';
import SearchUsers from 'components/Users/Search';
import Globis from 'containers/Globis/Members';
import './App.css';

// const logo = require('./logo.svg');
import * as logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Helmet htmlAttributes={{ lang: 'ja' }} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/globis/members" component={Globis} />
          <Route path="/users/search" component={SearchUsers} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
