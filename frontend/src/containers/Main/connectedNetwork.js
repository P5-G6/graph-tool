import { connect } from 'react-redux';
import Network from '../../components/Network';
import Creators, { get } from './redux/reducer';

const mapStateToProps = (state) => ({
  ...get.graphData(state),
  loading: get.loading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPress: ({edges: [edge]}) =>  dispatch(Creators.selectNode(edge)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
