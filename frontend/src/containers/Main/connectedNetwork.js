import { connect } from "react-redux";
import Network from "../../components/Network";
import Creators, { getGraphData, getMain } from "./redux/reducer";

const mapStateToProps = (state) => ({
  loading: getMain.loading(state),
  nodes: getGraphData.nodes(state),
  edges: getGraphData.edges(state),
});

const actions = {
  'node': ({node}) => Creators.selectNode(node),
  'edge': ({edge}) => () => {},
  'none': () => Creators.deselectNode(),
}

const mapDispatchToProps = (dispatch) => ({
  onSelect: ({ edges: [edge = null], nodes: [node = null] }) => {
    return dispatch(Creators.selectNode(node));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
