import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import Creators, { Types, get } from './reducer';
import adaptNetwork from '../../../utils/adaptNetwork';

// import api from '../../../services/api';

import mock from '../../../mocks/nodes.json';
import bananaSplit from '../../../utils/bananaSplit';

const mockSyncGraph = (values) =>
  new Promise((resolve) => {
    const response = { data: mock, status: 200 };
    setTimeout(() => {
      resolve(response);
    }, 500);
  });

const mockedAdd = (values) =>
  new Promise((resolve) => {
    const response = { data: {}, status: 200 };
    setTimeout(() => {
      resolve(response);
    }, 500);
  });

function* syncGraphDataSaga() {
  try {
    // TODO: ASYNC VALUES SEND
    const { data = {}, status } = yield call(mockSyncGraph);

    if (status === 200) {
      const graphData = adaptNetwork(data);

      return yield put(Creators.syncGraphDataSuccess(graphData));
    }

    yield put(Creators.syncGraphDataError());
  } catch (error) {
    yield put(Creators.syncGraphDataError());
  }
}

function* pushValueSaga() {
  try {
    const textInput = yield select(get.textInput) || '';

    const { valid = false, value } = bananaSplit(textInput);

    if (!valid) return yield put(Creators.pushValueError());

    const { status } = yield call(mockedAdd);

    if (status === 200) {
      const [from, to, weight, directioned] = value;

      return yield all([
        put(Creators.syncGraphData()),
        put(Creators.pushValueSuccess({ from, to, weight, directioned })),
      ]);
    }

    return yield put(Creators.pushValueError());
  } catch (error) {
    return yield put(Creators.pushValueError());
  }
}

export default function* MainSaga() {
  return yield all([
    takeLatest(Types.SYNC_GRAPH_DATA, syncGraphDataSaga),
    takeLatest(Types.PUSH_VALUE, pushValueSaga),
  ]);
}
