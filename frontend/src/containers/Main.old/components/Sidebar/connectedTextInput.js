import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import Creators, { get } from '../../redux/reducer';

const mapStateToProp = (state) => ({
  value: get.textInput(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(Creators.setTextInput(value)),
});

export default connect(mapStateToProp, mapDispatchToProps)(TextInput);