import Creators, { Types } from "./reducer";
import { put, all, takeLatest } from "redux-saga/effects";

function* syncSaga() {
  try {
    return yield put(Creators.initialSyncError());
  } catch (error) {
    return yield put(Creators.initialSyncError());
  }
}

export default function* MainSaga() {
  return yield all([takeLatest(Types.INITIAL_SYNC, syncSaga)]);
}
