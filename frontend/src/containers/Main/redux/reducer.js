import { createActions, createReducer } from "reduxsauce";

export const PATH = "MainView";

const { Creators, Types } = createActions(
  {
    sync: null,
    syncSuccess: [
      "nodes",
      "edges",
      "allDirectioned",
      "graphOrder",
      "graphSize",
    ],
    syncError: null,

    addNode: ["node"],
    addNodeSuccess: null,
    addNodeError: null,

    addEdge: ["edge"],
    addEdgeSuccess: null,
    addEdgeError: null,

    reset: null,
  },
  { prefix: `${PATH}/` }
);

export default Creators;
export { Types };

const INITIAL_STATE = {
  // SECTION GRAPHDATA:
  nodes: [],
  edges: [],
  allDirectioned: false,

  // SECTION DATA:
  graphOrder: null,
  graphSize: null,
  loadingGraph: false,

  // SECTION MAIN:
  loading: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC]: (state) => ({ ...state, loading: true }),
  [Types.SYNC_SUCCESS]: (
    state,
    { nodes, edges, allDirectioned, graphOrder, graphSize }
  ) => ({
    ...state,
    nodes,
    edges,
    allDirectioned,
    graphOrder,
    graphSize,
    loading: false,
  }),
  [Types.SYNC_ERROR]: (state) => ({ ...state, loading: false }),

  [Types.ADD_NODE]: (state) => ({
    ...state,
    loadingGraph: true,
  }),
  [Types.ADD_NODE_SUCCESS]: (state) => ({
    ...state,
    loadingGraph: false,
  }),
  [Types.ADD_NODE_ERROR]: (state) => ({
    ...state,
    loadingGraph: false,
  }),

  [Types.ADD_EDGE]: (state) => ({
    ...state,
    loadingGraph: true,
  }),
  [Types.ADD_EDGE_SUCCESS]: (state) => ({
    ...state,
    loadingGraph: false,
  }),
  [Types.ADD_EDGE_ERROR]: (state) => ({
    ...state,
    loadingGraph: false,
  }),

  [Types.RESET]: () => INITIAL_STATE,
});

export const getGraphData = {
  nodes: (state) => state[PATH].nodes,
  edges: (state) => state[PATH].edges,
  loading: (state) => state[PATH].loadingGraph,
};

export const getMain = {
  loading: (state) => state[PATH].loading,
};
