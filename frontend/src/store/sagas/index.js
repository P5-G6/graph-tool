import { all } from "redux-saga/effects";

import MainSaga from "../../containers/Main.old/redux/saga";
import NewMainSaga from '../../containers/Main/redux/sagas';

export default function* sagas() {
    return yield all([MainSaga(), NewMainSaga()]);
}