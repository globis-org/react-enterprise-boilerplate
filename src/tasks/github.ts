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
  yield takeEvery(actions.searchUsers.started, runSearchUsers);
}

function* runSearchUsers(action: any): SagaIterator {
  try {
    const query = action.payload;
    const api = new GitHubApi();
    const users = yield call(
      api.searchUsers,
      query,
    );
    yield put(actions.searchUsers.done(users));

  } catch (err) {
    yield put(actions.searchUsers.failed(err));
  }
}

export default function* githubTask() {
  yield all([
    fork(watchLoadMembers),
    fork(watchSearchUsers),
  ]);
}
