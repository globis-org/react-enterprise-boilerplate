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
  const query = action.payload.query;

  try {
    const api = new GitHubApi();
    const users = yield call(
      api.searchUsers,
      query,
    );
    yield put(actions.searchUsers.done({
      params: { query },
      result: { users },
    }));

  } catch (error) {
    yield put(actions.searchUsers.failed({
      params: { query },
      error: error as Error,
    }));
  }
}

export default function* githubTask() {
  yield all([
    fork(watchLoadMembers),
    fork(watchSearchUsers),
  ]);
}
