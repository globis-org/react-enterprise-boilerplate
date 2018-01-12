import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// import { getOrgMembers } from './actions/github';
import App from './App';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
