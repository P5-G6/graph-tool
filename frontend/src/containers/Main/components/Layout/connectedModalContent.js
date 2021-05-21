import ModalContent from "../../../Main.old/components/ModalContent";
import { connect } from "react-redux";

import Creators, { getNode } from "../../redux/reducer";

const nodeValues = (state) => {
  const data = getNode.data(state) || {};
  const selected = getNode.selectedNode(state) || null;

  const { adjacentList = {}, vertexDegree = {} } = data;

  const adjKeys = Object.keys(adjacentList);

  const adaptedAdj = adjKeys.reduce((acc, key) => {
    const list = adjacentList[key] || [];
    const values = list.map(([to, weight, directioned]) => ({
      from: selected,
      to,
      weight,
      directioned,
    }));
    return { ...acc, [key]: values };
  }, []);

  return { adjacencyList: adaptedAdj, degree: vertexDegree };
};

const mapStateToProps = (state) => ({
  name: getNode.selectedNode(state) || "",
  ...nodeValues(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: () => dispatch(Creators.deleteNode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
