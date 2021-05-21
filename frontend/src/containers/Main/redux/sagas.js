import Creators, { Types } from "./reducer";
import { put, all, takeLatest, call } from "redux-saga/effects";

import mock from "../../../mocks/nodes.json";
import adaptNetwork from "../../../utils/adaptNetwork";
import api from "../../../services/api";

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
    if (USE_MOCK) {
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
          edges,
          nodes,
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

function* addNodeSaga(node) {
  try {
    console.log(node);

    if (USE_MOCK) {
      return yield all([put(Creators.sync()), put(Creators.addNodeSuccess())]);
    }

    const { status } = yield call(api.post, "graph/add-vertex", {
      vertex_labeledge: node,
    });

    if (status === 200) {
      return yield all([put(Creators.sync()), put(Creators.addNodeSuccess())]);
    }

    return yield put(Creators.addNodeError());
  } catch (error) {
    return yield put(Creators.addNodeError());
  }
}

function* addEdgeSaga(edge = {}) {
  try {
    if (USE_MOCK) {
      return yield all([put(Creators.sync()), put(Creators.addEdgeSuccess())]);
    }

    // const {
    //   origin = null,
    //   destiny = null,
    //   weight = 0,
    //   useDirection = 0,
    // } = edge;

    const { status } = yield call(api.post, "graph/add-edge", { edge });

    if (status === 200) {
      return yield all([put(Creators.sync()), put(Creators.addEdgeSuccess())]);
    }

    return yield put(Creators.addEdgeSaga());
  } catch (error) {
    return yield put(Creators.addEdgeSaga());
  }
}

function* resetSaga() {
  yield call(api.get, "graph/delete_graph");
}

export default function* MainSaga() {
  return yield all([
    takeLatest(Types.SYNC, syncSaga),
    takeLatest(Types.ADD_NODE, addNodeSaga),
    takeLatest(Types.ADD_EDGE, addEdgeSaga),
    takeLatest(Types.RESET, resetSaga),
  ]);
}
