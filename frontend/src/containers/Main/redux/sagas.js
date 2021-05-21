import Creators, { getNode, Types } from "./reducer";
import { put, all, takeLatest, call, select } from "redux-saga/effects";

import mock from "../../../mocks/nodes.json";
import adaptNetwork from "../../../utils/adaptNetwork";
import api from "../../../services/api";
import formatter from "../../../utils/multiRespFormatter";

const USE_MOCK = true;

const nodeMock = () =>
  new Promise((res) => {
    const response = { data: mock, status: 200 };
    setTimeout(() => {
      res(response);
    }, 200);
  });

function* syncSaga() {
  try {
    if (!USE_MOCK) {
      const { data } = yield call(nodeMock);
      const { nodes, edges, allDirectioned } = adaptNetwork(data);
      return yield put(
        Creators.syncSuccess(nodes, edges, allDirectioned, 0, 0)
      );
    }

    const [
      { data, status },
      { data: orderData = {} },
      { data: sizeData = {} },
    ] = yield all([
      call(api.get, "adjacency-list"),
      call(api.get, "graph-order"),
      call(api.get, "graph-size"),
    ]);

    const { body: orderBody = {} } = orderData;
    const { graph_order: graphOrder = 0 } = orderBody;

    const { body: sizeBody = {} } = sizeData;
    const { graph_size: graphSize = 0 } = sizeBody;

    if (status === 200) {
      const {
        body: { adjacency_list },
      } = data;
      const { edges, nodes, allDirectioned } = adaptNetwork(adjacency_list);

      return yield put(
        Creators.syncSuccess(
          nodes,
          edges,
          allDirectioned,
          graphOrder,
          graphSize
        )
      );
    }

    return yield put(Creators.syncError());
  } catch (error) {
    return yield put(Creators.syncError());
  }
}

function* addNodeSaga({ node }) {
  try {
    console.log(node);

    if (!USE_MOCK) {
      return yield all([put(Creators.sync()), put(Creators.addNodeSuccess())]);
    }

    const { status } = yield call(api.post, "graph/add-vertex", node);

    if (status === 200) {
      return yield all([put(Creators.sync()), put(Creators.addNodeSuccess())]);
    }

    return yield put(Creators.addNodeError());
  } catch (error) {
    return yield put(Creators.addNodeError());
  }
}

function* addEdgeSaga({ edge = {} }) {
  try {
    if (!USE_MOCK) {
      return yield all([put(Creators.sync()), put(Creators.addEdgeSuccess())]);
    }

    const {
      origin = null,
      destiny = null,
      weight = "0",
      useDirection = 0,
    } = edge;

    const { status } = yield call(api.post, "graph/add-edge", {
      edge: [origin, destiny, Number.parseInt(weight), useDirection],
    });

    if (status === 200) {
      return yield all([put(Creators.sync()), put(Creators.addEdgeSuccess())]);
    }

    return yield put(Creators.addEdgeSaga());
  } catch (error) {
    return yield put(Creators.addEdgeSaga());
  }
}

const retrieverKeys = [
  { key: "least_cost", group: "body", extKey: "leastCost" },
  { key: "least_sequence", group: "body", extKey: "leastSequence" },
  { key: "vertex_degree", group: "body", extKey: "vertexDegree" },
  { key: "vertex_adjacent_list", group: "body", extKey: "adjacentList" },
];

function* selectNodeSaga({ node }) {
  try {
    console.log("Selected Node", { node });

    if (node !== null) {
      const responses = yield all([
        call(api.get, "dijkstra/least_cost_all", {
          params: { start_vertex: node },
        }),
        call(api.get, "dijkstra/least_sequence_all", {
          params: { start_vertex: node },
        }),
        call(api.get, "vertex-degree", { params: { vertex: node } }),
        call(api.get, "vertex-adjacent-list", { params: { vertex: node } }),
      ]);

      const { data: nodeData, hasError } = formatter({
        retrieverKeys,
        responses,
      });

      console.log("adapted Node", nodeData);
      if (!hasError) {
        return yield put(Creators.selectNodeSuccess(nodeData));
      }
    }

    return yield put(Creators.selectNodeError());
  } catch (error) {
    return yield put(Creators.selectNodeError());
  }
}

function* deleteNode() {
  try {

    const node = yield select(getNode.selectedNode);
    const { status } = yield call(api.post, "/graph/delete_vertex", {
      vertex_label: node,
    });

    if (status === 200) {
      return yield all([put(Creators.sync()), put(Creators.selectNode(null))]);
    }
  } catch (error) {}
}

function* resetSaga() {
  yield call(api.get, "graph/delete_graph");
}

export default function* MainSaga() {
  return yield all([
    takeLatest(Types.SYNC, syncSaga),
    takeLatest(Types.ADD_NODE, addNodeSaga),
    takeLatest(Types.ADD_EDGE, addEdgeSaga),
    takeLatest(Types.SELECT_NODE, selectNodeSaga),
    takeLatest(Types.RESET, resetSaga),
    takeLatest(Types.DELETE_NODE, deleteNode),
  ]);
}
