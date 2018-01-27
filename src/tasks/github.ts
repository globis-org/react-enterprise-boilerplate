import { SagaIterator } from 'redux-saga';
import { all, call, fork, put, take } from 'redux-saga/effects';

import * as actions from 'actions/github';
import { GitHubApi } from 'services/github';

function* watchLoadMembers(): SagaIterator {
  while (true) {
    const action = yield take(actions.loadMembers);

    try {
      const api = new GitHubApi();
      const members = yield call(
        api.getOrganizationMembers,
        action.payload,
      );
      yield put(actions.setMembers({ members }));

    } catch (err) {
      throw err;
    }
  }
}

function* watchLoadSearchUsers(): SagaIterator {
  while (true) {
    const action = yield take(actions.searchUsers);

    try {
      const api = new GitHubApi();
      const users = yield call(
        api.searchUsers,
        action.payload,
      );
      yield put(actions.setUsers({ users }));

    } catch (err) {
      throw err;
    }
  }
}

export default function* githubTask() {
  yield all([
    fork(watchLoadMembers),
    fork(watchLoadSearchUsers),
  ]);
}
