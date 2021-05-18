import { connect } from 'react-redux';
import Network from '../../components/Network';
import Creators, { get } from './redux/reducer';

const mapStateToProps = (state) => ({
  ...get.graphData(state),
  loading: get.loading(state),
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
