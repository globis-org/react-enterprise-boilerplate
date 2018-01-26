import { all, fork } from 'redux-saga/effects';
import githubTasks from './github';

export default function* rootTask() {
  yield all([
    fork(githubTasks),
  ]);
}
