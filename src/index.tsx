import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { fetchMembers } from './actions/github';
import App from './App';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(fetchMembers);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
