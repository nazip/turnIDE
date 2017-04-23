import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { incLike } from 'components/redux/actions/Like';
import { POST_EDIT } from 'components/redux/const/actionTypes/Post';

const stateToProps = (state) => (
  {
    item: state.post.entry,
    isFetching: state.post.fetching,
    error: state.post.error,
    edit: state.post.edit,
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id) => (dispatch(incLike(id, false))),
    editClick: () => (dispatch({type: POST_EDIT}))
  }
);

export default connect(stateToProps, actionToProps)(Post);
