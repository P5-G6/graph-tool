import { connect } from 'react-redux';
import { getNode } from '../../redux/reducer';

import Modal from '../../../../components/Modal';

const mapStateToProps = (state) => ({
  visible: getNode.selectedNode(state),
});

export default connect(mapStateToProps)(Modal);
