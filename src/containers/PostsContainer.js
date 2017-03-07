import { connect } from 'react-redux';
import BlogPage from 'components/containers/BlogPage';
import { incLike } from 'components/actions/Posts';

const stateToProps = (state) => (
  {
    items: state.posts.entries,
    isFetching: state.posts.fetching,
    error: state.posts.error
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id, items) => (dispatch(incLike(id, items)))
  }
);

export default connect(stateToProps, actionToProps)(BlogPage);
