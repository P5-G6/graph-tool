import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import Creators, { Types, get, getNode } from './reducer';
import adaptNetwork from '../../../utils/adaptNetwork';

import api from '../../../services/api';

import mock from '../../../mocks/nodes.json';
import bananaSplit from '../../../utils/bananaSplit';
import adaptEdgesByVertex from '../../../utils/adaptEdgesByVertex';

const mockSyncGraph = (values) =>
  new Promise((resolve) => {
    const response = { data: mock, status: 200 };
    setTimeout(() => {
      resolve(response);
    }, 500);
  });

const mockedAdd = (values) =>
  new Promise((resolve) => {
    const response = { data: {}, status: 200 };
    setTimeout(() => {
      resolve(response);
    }, 500);
  });

function* syncGraphDataSaga() {
  try {
    // TODO: ASYNC VALUES SEND

    const [
      { data, status },
      { data: orderData = {} },
      { data: sizeData = {} },
    ] = yield all([
      call(api.get, 'adjacency-list'),
      call(api.get, 'graph-order'),
      call(api.get, 'graph-size'),
    ]);

    const { body: orderBody = {} } = orderData;
    const { graph_order: graphOrder = 0 } = orderBody;

    const { body: sizeBody = {} } = sizeData;
    const { graph_size: graphSize = 0 } = sizeBody;

    // const { data = {}, status, body } = yield call(api.get, '/adjacency-list');

    console.log('Data', { orderData, sizeData });

    if (status === 200) {
      const {
        body: { adjacency_list },
      } = data;
      const graphData = adaptNetwork(adjacency_list);

      return yield put(
        Creators.syncGraphDataSuccess(graphData, graphOrder, graphSize)
      );
    }

    yield put(Creators.syncGraphDataError());
  } catch (error) {
    yield put(Creators.syncGraphDataError());
  }
}

function* pushValueSaga() {
  try {
    const textInput = yield select(get.textInput) || '';

    const { valid = false, value } = bananaSplit(textInput);

    if (!valid) return yield put(Creators.pushValueError());

    console.log('send value', value);

    const [{ status: statusA }, { status: statusB }] = yield all([
      call(api.post, 'graph/add-vertex', { vertex_label: value[0] }),
      call(api.post, 'graph/add-vertex', { vertex_label: value[1] }),
    ]);

    const { status } = yield call(api.post, 'graph/add-edge', { edge: value });

    yield put(Creators.syncGraphData());

    if (status === 200) {
      const [from, to, weight, directioned] = value;

      return yield all([
        put(Creators.syncGraphData()),
        put(Creators.pushValueSuccess({ from, to, weight, directioned })),
      ]);
    }

    return yield put(Creators.pushValueError());
  } catch (error) {
    return yield put(Creators.pushValueError());
  }
}

function* selectNodeSaga({ selectedNode }) {
  try {
    if (selectedNode !== null) {
      console.log('Selected', { selectedNode });

      const params = { vertex: selectedNode };
      //vertex-adjacent-list

      const [
        { data: degreeData, status: degreeStatus },
        { data: adjacencyData = {}, status: adjacencyStatus },
      ] = yield all([
        call(api.get, 'vertex-degree', { params }),
        call(api.get, 'vertex-adjacent-list', { params }),
      ]);

      const nodeData = {
        adjacencyList: { edges: [], in: [], out: [] },
        degree: { edges: 0, in: 0, out: 0 },
      };

      if (adjacencyStatus === 200) {
        const { body: adjBody = {} } = adjacencyData;
        const { vertex_adjacent_list: adjList = {} } = adjBody;

        nodeData.adjacencyList = {
          edges: adaptEdgesByVertex({
            vertexLabel: selectedNode,
            edges: adjList.edges,
          }),
          in: adaptEdgesByVertex({
            vertexLabel: selectedNode,
            edges: adjList.in,
          }),
          out: adaptEdgesByVertex({
            vertexLabel: selectedNode,
            edges: adjList.out,
          }),
        };
      }

      if (degreeStatus === 200) {
        const { body: degBody = {} } = degreeData;
        const { vertex_degree: vertDegre = {} } = degBody;

        nodeData.degree = { ...nodeData.degree, ...vertDegre };
      }

      console.log('Node', { degreeData, adjacencyData, nodeData });

      return yield put(Creators.selectNodeSuccess(nodeData)); // TODO ADD MOCK
    }

    return yield put(Creators.selectNodeError());
  } catch (error) {
    return yield put(Creators.selectNodeError());
  }
}

function* resetSaga() {
  yield call(api.get, 'graph/delete_graph');
}

function* deleteNodeSaga() {
  try {
    const selectedNode = yield select(getNode.selectedNode);

    const { status } = yield call(api.post, '/graph/delete_vertex', {
      vertex_label: selectedNode,
    });

    if (status === 200) {
      return yield all([
        put(Creators.deleteSelectedNodeSuccess()),
        put(Creators.syncGraphData()),
        put(Creators.deselectNode()),
      ]);
    }

    yield put(Creators.deleteSelectedNodeError());
  } catch (error) {
    yield put(Creators.deleteSelectedNodeError());
  }
}

export default function* MainSaga() {
  return yield all([
    takeLatest(Types.SYNC_GRAPH_DATA, syncGraphDataSaga),
    takeLatest(Types.PUSH_VALUE, pushValueSaga),
    takeLatest(Types.SELECT_NODE, selectNodeSaga),
    takeLatest(Types.RESET, resetSaga),
    takeLatest(Types.DELETE_SELECTED_NODE, deleteNodeSaga)
  ]);
}
