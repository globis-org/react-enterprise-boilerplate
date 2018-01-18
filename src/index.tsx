import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { I18nextProvider } from 'react-i18next';
import reducer from 'reducers';
import App from './App';
import i18n from './i18n';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router history={createHistory()}>
        <App />
      </Router>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
