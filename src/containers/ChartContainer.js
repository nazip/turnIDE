import { connect } from 'react-redux';
import Chart from 'components/elements/Chart';
import _ from 'lodash';

const dataForChart = (items, likes) => (
  items.map((item) => (
    [item.metadata.author || 'not defined',
      _.findIndex(likes, (like) => like.id == item.id).like || 0]
  ))
);
const stateToProps = (state) => (
  {
    data: dataForChart(state.posts.entries, state.likes.likes)
  }
);

export default connect(stateToProps)(Chart);
