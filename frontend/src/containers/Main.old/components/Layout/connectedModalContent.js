import { connect } from 'react-redux';
import Creators, { getNode } from '../../redux/reducer';
import ModalContent from '../ModalContent';

const mapStateToProps = (state) => ({
  name: getNode.selectedNode(state),
  ...getNode.selectedNodeData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: () => dispatch(Creators.deleteSelectedNode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
