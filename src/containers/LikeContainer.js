import { connect } from 'react-redux';
import BlogItem from 'components/ui/BlogItem';
import { incLike } from 'components/redux/actions/Like';

const stateToProps = (state) => (
  {
    likes: state.likes.likes,
    isFetching: state.likes.isFetching,
    error: state.likes.error,
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id) => (dispatch(incLike(id))),
  }
);

export default connect(stateToProps, actionToProps)(BlogItem);
