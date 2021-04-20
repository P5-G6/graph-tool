import { connect } from 'react-redux';
import { get } from '../../redux/reducer';
import List from '../../../../components/List';

const getData = state => {
  const values = get.values(state);

  console.log('Values', values);

  return values;
}

const mapStateToProp = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProp)(List);
