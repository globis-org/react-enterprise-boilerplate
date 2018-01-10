import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// import { fetchMembers } from './actions/github';
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
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
