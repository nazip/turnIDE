import { connect } from 'react-redux';
import Like from 'components/ui/Like';
import { incLike } from 'components/redux/actions/Like';
import store from 'components/redux/store';

const stateToProps = (state) => (
  {
    likes: state.likes.likes,
    isFetching: state.likes.isFetching,
    error: state.likes.error
  }
);

const actionToProps = (dispatch) => (
  {
    likeHandler: (id) => (dispatch(incLike(id))),
    like: (id) => store.getState().likes.likes.filter(
                 (like) => (like.id == id))[0].like
  }
);

export default connect(stateToProps, actionToProps)(Like);
