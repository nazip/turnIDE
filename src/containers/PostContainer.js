import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { incLike } from 'components/redux/actions/Post';

const stateToProps = (state) => (
  {
    item: state.post.entry,
    isFetching: state.post.fetching,
    error: state.post.error
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id) => (dispatch(incLike(id)))
  }
);

export default connect(stateToProps, actionToProps)(Post);