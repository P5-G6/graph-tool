import { connect } from "react-redux";
import Network from "../../components/Network";
import { getGraphData, getMain } from "./redux/reducer";

const mapStateToProps = (state) => ({
  loading: getGraphData.loading(state),
  nodes: getGraphData.nodes(state),
  edges: getGraphData.edges(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
