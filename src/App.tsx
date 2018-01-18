import * as React from 'react';
import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'components/Home';
import SearchUsers from 'components/Users/Search';
import Globis from 'containers/Globis/Members';
import './App.css';

import * as logo from './logo.svg';

interface AppProps {
  t?: any;
}

class App extends React.Component<AppProps> {
  public render() {
    const { t } = this.props;

    return (
      <div className="App">
        <Helmet htmlAttributes={{ lang: 'ja' }}>
          <title>{t('pages.top.title')}</title>
        </Helmet>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{t('pages.top.title')}</h2>
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

export default translate()(App);
