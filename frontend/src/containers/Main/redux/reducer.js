import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  updateValues: ["values"],
  resetValues: null,

  sendValues: null,
  sendValuesSuccess: ["graphData"],
  sendValuesError: null,
});

export default Creators;
export { Types };

const INITIAL_STATE = {
  values: {},
  graphData: {nodes: [], edges: []},
  loading: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_VALUES]: (state, { values }) => ({
    ...state,
    values,
  }),
  [Types.RESET_VALUES]: () => INITIAL_STATE,
  [Types.SEND_VALUES]: (state) => ({
    ...state,
    loading: true,
  }),
  [Types.SEND_VALUES_SUCCESS]: (state, { graphData = INITIAL_STATE.graphData }) => ({
    ...state,
    loading: false,
    graphData,
  }),
  [Types.SEND_VALUES_ERROR]: (state) => ({
    ...state,
    loading: false,
  }),
});

const root = (state) => state["MainReducer"];

export const get = {
  values: (state) => root(state).values,
  graphData: (state) => root(state).graphData,
  loading: (state) => root(state).loading,
};
