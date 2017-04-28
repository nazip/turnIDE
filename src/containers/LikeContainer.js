import { connect } from 'react-redux';
import Like from 'components/ui/Like';
import { incLike } from 'components/redux/actions/Like';
import _ from 'lodash';

const stateToProps = (state, ownProps) => (
  {
    likes: state.likes.likes,
    isFetching: state.likes.isFetching,
    error: state.likes.error,
    like: _.filter(state.likes.likes, {id: ownProps.id})[0].like
  }
);

const actionToProps = (dispatch) => (
  {
    likeHandler: (id) => (dispatch(incLike(id)))
  }
);

export default connect(stateToProps, actionToProps)(Like);
