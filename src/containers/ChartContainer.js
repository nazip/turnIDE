import { connect } from 'react-redux';
import Chart from 'components/elements/Chart';
import findIndex from 'lodash/findIndex';

const dataForChart = (items, likes) => (
  items.map((item) => (
    [item.metadata.author || 'not defined',
      likes[findIndex(likes, (like) => like.id == item.id)].like]
  ))
);
const stateToProps = (state) => (
  {
    data: dataForChart(state.posts.entries, state.likes.likes)
  }
);

export default connect(stateToProps)(Chart);
