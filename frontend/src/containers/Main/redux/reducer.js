import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  updateValues: ['values'],
  resetValues: null,

  pushValue: null,
  pushValueSuccess: ['value'],
  pushValueError: null,

  setTextInput: ['textInput'],

  syncGraphData: null,
  syncGraphDataSuccess: ['graphData'],
  syncGraphDataError: null,
});

export default Creators;
export { Types };

const INITIAL_STATE = {
  values: [],
  graphData: { nodes: [], edges: [] },
  loading: false,
  textInput: '',
  validating: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_VALUES]: (state, { values }) => ({
    ...state,
    values,
  }),
  [Types.RESET_VALUES]: () => INITIAL_STATE,

  [Types.PUSH_VALUE]: (state) => ({ ...state, validating: true }),
  [Types.PUSH_VALUE_SUCCESS]: ({ values, ...state }, { value }) => ({
    ...state,
    values: [
      ...values,
      value
    ],
    validating: false,
    textInput: '',
  }),
  [Types.PUSH_VALUE_ERROR]: (state) => ({ ...state, validating: false, textInput: '' }),

  [Types.SYNC_GRAPH_DATA]: (state) => ({
    ...state,
    loading: true,
  }),
  [Types.SYNC_GRAPH_DATA_SUCCESS]: (
    state,
    { graphData = INITIAL_STATE.graphData }
  ) => ({
    ...state,
    loading: false,
    graphData,
  }),
  [Types.SYNC_GRAPH_DATA_ERROR]: (state) => ({
    ...state,
    loading: false,
  }),

  [Types.SET_TEXT_INPUT]: (state, { textInput }) => ({
    ...state,
    textInput,
  }),
});

const root = (state) => state['MainReducer'];

export const get = {
  values: (state) => root(state).values,
  graphData: (state) => root(state).graphData,
  loading: (state) => root(state).loading,
  textInput: (state) => root(state).textInput,
  validating: (state) => root(state).validating,
};
