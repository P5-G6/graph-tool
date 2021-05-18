import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  updateValues: ['values'],
  resetValues: null,

  pushValue: null,
  pushValueSuccess: ['value'],
  pushValueError: null,

  setTextInput: ['textInput'],

  syncGraphData: null,
  syncGraphDataSuccess: ['graphData', 'graphOrder', 'graphSize'],
  syncGraphDataError: null,

  selectNode: ['selectedNode'],
  selectNodeSuccess: ['selectedNodeData'],
  selectNodeError: null,

  deselectNode: null,

  deleteSelectedNode: null,
  deleteSelectedNodeSuccess: null,
  deleteSelectedNodeError: null,

  reset: null,
});

export default Creators;
export { Types };

const INITIAL_STATE = {
  values: [],
  graphData: { nodes: [], edges: [] },
  graphOrder: 0,
  graphSize: 0,
  loading: false,
  textInput: '',
  validating: false,

  selectedNode: null,
  selectedNodeData: null,
  loadingNodeData: false,
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
    values: [...values, value],
    validating: false,
    textInput: '',
  }),
  [Types.PUSH_VALUE_ERROR]: (state) => ({
    ...state,
    validating: false,
    textInput: '',
  }),

  [Types.SYNC_GRAPH_DATA]: (state) => ({
    ...state,
    loading: true,
  }),
  [Types.SYNC_GRAPH_DATA_SUCCESS]: (
    state,
    {
      graphData = INITIAL_STATE.graphData,
      graphOrder = INITIAL_STATE.graphOrder,
      graphSize = INITIAL_STATE.graphSize,
    }
  ) => ({
    ...state,
    loading: false,
    graphData,
    graphOrder,
    graphSize,
  }),
  [Types.SYNC_GRAPH_DATA_ERROR]: (state) => ({
    ...state,
    loading: false,
    graphData: INITIAL_STATE.graphData,
    graphOrder: INITIAL_STATE.graphOrder,
    graphSize: INITIAL_STATE.graphSize,
    values: []
  }),

  [Types.SET_TEXT_INPUT]: (state, { textInput }) => ({
    ...state,
    textInput,
  }),

  [Types.SELECT_NODE]: (state, { selectedNode }) => ({
    ...state,
    selectedNode,
    loadingNodeData: true,
  }),

  [Types.SELECT_NODE_SUCCESS]: (state, { selectedNodeData }) => ({
    ...state,
    selectedNodeData,
    loadingNodeData: false,
  }),
  [Types.SELECT_NODE_ERROR]: (state) => ({
    ...state,
    loadingNodeData: false,
    selectedNodeData: null,
  }),

  [Types.DESELECT_NODE]: (state) => ({
    ...state,
    loadingNodeData: false,
    selectedNodeData: false,
    selectedNode: INITIAL_STATE.selectedNode,
  }),

  [Types.DELETE_SELECTED_NODE]: (state) => ({
    ...state,
    loading: true,
  }),
  [Types.DELETE_SELECTED_NODE_SUCCESS]: (state) => ({
    ...state,
    loading: false,
  }),
  [Types.DELETE_SELECTED_NODE_ERROR]: (state) => ({
    ...state,
    loading: false,
  }),

  [Types.RESET]: () => INITIAL_STATE,
});

const root = (state) => state['MainReducer'];

export const get = {
  values: (state) => root(state).values,
  graphData: (state) => root(state).graphData,
  loading: (state) => root(state).loading,
  textInput: (state) => root(state).textInput,
  validating: (state) => root(state).validating,
  graphOrder: (state) => root(state).graphOrder,
  graphSize: (state) => root(state).graphSize,
};

export const getNode = {
  selectedNode: (state) => root(state).selectedNode,
  selectedNodeData: (state) => root(state).selectedNodeData,
};
