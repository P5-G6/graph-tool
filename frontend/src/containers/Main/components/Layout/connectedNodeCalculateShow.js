import { connect } from "react-redux";
import { getNode } from "../../redux/reducer";
import CalculateShow from "../CalculateShow";

const mapStateToProps = (state) => ({
  type: "node",
  from: getNode.selectedNode(state),
  ...getNode.data(state),
});

export default connect(mapStateToProps)(CalculateShow);
