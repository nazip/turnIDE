import { connect } from 'react-redux';
import BlogList from 'components/containers/BlogList';
import { incLike } from 'components/redux/actions/Like';

const stateToProps = (state) => (
  {
    items: state.posts.entries,
    isFetching: state.posts.fetching,
    error: state.posts.error
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id) => (dispatch(incLike(id)))
  }
);

export default connect(stateToProps, actionToProps)(BlogList);
