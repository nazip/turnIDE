import { connect } from 'react-redux';
import Post from 'components/views/Post';

const stateToProps = (state) => (
  {
    item: state.post.entry,
    isFetching: state.post.fetching,
    error: state.post.error
  }
);

export default connect(stateToProps)(Post);
