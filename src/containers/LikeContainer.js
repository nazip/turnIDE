import { connect } from 'react-redux';
import Like from 'components/ui/Like';
import { incLike } from 'components/redux/actions/Like';

const stateToProps = (state) => (
  {
    likes: state.likes.likes,
    isFetching: state.likes.isFetching,
    error: state.likes.error,
    like: (id) => state.likes.likes.filter(
                 (like) => (like.id == id))[0].like

  }
);

const actionToProps = (dispatch) => (
  {
    likeHandler: (id) => (dispatch(incLike(id)))
  }
);

export default connect(stateToProps, actionToProps)(Like);
