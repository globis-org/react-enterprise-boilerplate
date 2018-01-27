import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'reducers';
import rootTask from 'tasks';
import App from './App';
import i18n from './i18n';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const getMiddleware = () => {
  const applied = applyMiddleware(
    sagaMiddleware,
  );

  return process.env.NODE_ENV === 'production' ?
    applied : composeWithDevTools(applied);
};

const store = createStore(
  rootReducer,
  getMiddleware(),
);

sagaMiddleware.run(rootTask);

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
