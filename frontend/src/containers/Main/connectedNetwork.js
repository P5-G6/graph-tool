import { connect } from 'react-redux';
import Network from '../../components/Network';
import { get } from './redux/reducer';

const mapStateToProps = (state) => ({
  ...get.graphData(state),
  loading: get.loading(state),
});

export default connect(mapStateToProps)(Network);
