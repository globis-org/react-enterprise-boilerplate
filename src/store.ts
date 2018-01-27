import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'reducers';
import rootTask from 'tasks';

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
export default store;

sagaMiddleware.run(rootTask);
