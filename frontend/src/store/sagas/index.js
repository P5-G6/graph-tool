import { all } from "redux-saga/effects";

import MainSaga from "../../containers/Main.old/redux/saga";

export default function* sagas() {
    return yield all([MainSaga()]);
}