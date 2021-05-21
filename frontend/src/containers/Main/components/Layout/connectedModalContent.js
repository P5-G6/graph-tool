import ModalContent from "../../../Main.old/components/ModalContent";
import { connect } from "react-redux";

import Creators, { getNode } from "../../redux/reducer";

const nodeValues = (state) => {
  const data = getNode.data(state) || {};

  const { adjacentList = {}, vertexDegree = {} } = data;

  return { adjacencyList: adjacentList, degree: vertexDegree };
};

const mapStateToProps = (state) => ({
  name: getNode.selectedNode(state) || "",
  ...nodeValues(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: () => dispatch(Creators.deleteNode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
