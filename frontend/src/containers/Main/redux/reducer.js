import { createActions, createReducer } from "reduxsauce";

export const PATH = "MainView";

const { Creators, Types } = createActions(
  {
    initialSync: null,
    initialSyncSuccess: null,
    initialSyncError: null,

    addNode: ["node"],
    addNodeSuccess: ["nodes"],
    addNodeError: null,

    addEdge: ["edge"],
    addEdgeSuccess: ["edges"],
    addEdgeError: null,
  },
  { prefix: `${PATH}/` }
);

export default Creators;
export { Types };

const INITIAL_STATE = {
  // SECTION GRAPHDATA:
  nodes: [],
  edges: [],

  // SECTION DATA:
  graphOrder: null,
  graphSize: null,
  loadingGraph: false,

  // SECTION MAIN:
  loading: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INITIAL_SYNC]: (state) => ({ ...state, loading: true }),
  [Types.INITIAL_SYNC_SUCCESS]: (state) => ({ ...state, loading: false }),
  [Types.INITIAL_SYNC_ERROR]: (state) => ({ ...state, loading: false }),

  [Types.ADD_NODE]: (state) => ({
    ...state,
    loadingGraph: true,
  }),
  [Types.ADD_NODE_SUCCESS]: (state, { nodes }) => ({
    ...state,
    loadingGraph: false,
    nodes,
  }),
  [Types.ADD_NODE_ERROR]: (state) => ({
    ...state,
    loadingGraph: false,
  }),

  [Types.ADD_EDGE]: (state) => ({
    ...state,
    loadingGraph: true,
  }),
  [Types.ADD_EDGE_SUCCESS]: (state, { edges }) => ({
    ...state,
    loadingGraph: false,
    edges,
  }),
  [Types.ADD_EDGE_ERROR]: (state) => ({
    ...state,
    loadingGraph: false,
  }),
});

export const getGraphData = {
  nodes: (state) => state[PATH].nodes,
  edges: (state) => state[PATH].edges,
  loading: (state) => state[PATH].loadingGraph,
};

export const getMain = {
  loading: (state) => state[PATH].loading,
};
