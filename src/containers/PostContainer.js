import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { incLike } from 'components/redux/actions/Like';
import { POST_EDIT_TOGGLE } from 'components/redux/const/actionTypes/Post';
 
const stateToProps = (state) => (
  {
    item: state.post.entry,
    isFetching: state.post.fetching,
    error: state.post.error,
    editing: state.post.editing,
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id) => (dispatch(incLike(id, false))),
    editClick: () => (dispatch({type: POST_EDIT_TOGGLE}))
  }
);

export default connect(stateToProps, actionToProps)(Post);
