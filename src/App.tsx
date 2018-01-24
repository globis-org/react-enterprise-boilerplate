import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'components/Home';
import UsersSearch from 'components/Users/Search';
import Globis from 'containers/Globis/Members';
import pages from './pages';

import './App.css';
import * as logo from './logo.svg';

type AppProps = {} & InjectedTranslateProps;

const App: React.SFC<AppProps> = (props) => {
  const { t } = props;

  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'ja' }}>
        <title>{t('pages.top.title')}</title>
      </Helmet>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-test={'react-logo'} />
        <h2>{t('pages.top.title')}</h2>
      </header>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={pages.globisMembers.path} component={Globis} />
        <Route path={pages.usersSearch.path} component={UsersSearch} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default translate()(App);
