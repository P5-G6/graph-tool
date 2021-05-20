import { combineReducers } from "redux";

import { reducer as MainReducer } from "../../containers/Main.old/redux/reducer";

import * as Main from "../../containers/Main/redux/reducer";

export default combineReducers({
  MainReducer,
  [Main.PATH]: Main.reducer,
});
