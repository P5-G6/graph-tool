import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import Creators, { Types, get } from './reducer';
import adaptNetwork from '../../../utils/adaptNetwork';

// import api from '../../../services/api';

import mock from '../../../mocks/nodes.json';

const mockedSend = (values) =>
  new Promise((resolve) => {
    const response = { data: mock, status: 201 };
    setTimeout(() => {
      resolve(response);
    }, 500);
  });

function* sendValuesSaga() {
  try {
    // TODO: ASYNC VALUES SEND
    const values = yield select(get.values);

    const { data = {}, status } = yield call(mockedSend, values);

    if (status === 201) {
      const graphData = adaptNetwork(data);

      return yield put(Creators.sendValuesSuccess(graphData));
    }

    yield put(Creators.sendValuesError());
  } catch (error) {
    yield put(Creators.sendValuesError());
  }
}

export default function* MainSaga() {
  return yield all([takeLatest(Types.SEND_VALUES, sendValuesSaga)]);
}
