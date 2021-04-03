import { takeLatest, all, put } from "redux-saga/effects";
import Creators, { Types } from "./reducer";

function* sendValuesSaga() {
  try {
    // TODO: ASYNC VALUES SEND

    yield put(Creators.sendValuesError());
  } catch (error) {
    yield put(Creators.sendValuesError());
  }
}

export default function* MainSaga() {
  return yield all([takeLatest(Types.SEND_VALUES, sendValuesSaga)]);
}
