import { all, fork } from 'redux-saga/effects';
import githubTask from './github';

export default function* rootTask() {
  yield all([
    fork(githubTask),
  ]);
}
