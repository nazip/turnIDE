import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { incLike } from 'components/redux/actions/Like';
import * as type from 'components/redux/const/actionTypes/Post';

const stateToProps = (state) => (
  {
    item: state.post.entry,
    isFetching: state.post.fetching,
    error: state.post.error,
    editing: state.post.editing,
    addComment: state.post.addComment,
    comments: state.post.comments
  }
);

const actionToProps = (dispatch) => (
  {
    like: (id) => (dispatch(incLike(id, false))),
    editClick: () => (dispatch({type: type.POST_EDIT_TOGGLE})),
    addCommentClick: () => (dispatch({type: type.POST_ADD_COMMENT_TOGGLE}))
  }
);

export default connect(stateToProps, actionToProps)(Post);
