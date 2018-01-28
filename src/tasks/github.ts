import { SagaIterator } from 'redux-saga';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as actions from 'actions/github';
import { GitHubApi } from 'services/github';

function* watchLoadMembers(): SagaIterator {
  yield takeLatest(actions.loadMembers, loadMembers);
}

function* loadMembers(action: any): SagaIterator {
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

function* watchSearchUsers(): SagaIterator {
  yield takeEvery(actions.searchUsers, searchUsers);
}

function* searchUsers(action: any): SagaIterator {
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

export default function* githubTask() {
  yield all([
    fork(watchLoadMembers),
    fork(watchSearchUsers),
  ]);
}
