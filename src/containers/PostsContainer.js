import { connect } from 'react-redux';
import Index from 'components/views/index';
import { POSTS_ADD_TOGGLE } from 'components/redux/const/actionTypes/Posts';

const stateToProps = (state) => (
  {
    items: state.posts.entries.map((entry) =>
      Object.assign({},entry, {path: `post/${entry.id}`})),
    isFetching: state.posts.isFetching,
    error: state.posts.error,
    pagination: state.posts.pagination,
    adding: state.posts.adding
  }
);

const actionToProps = (dispatch) => (
  {
    addClick: () => dispatch({type: POSTS_ADD_TOGGLE})
  }
);

export default connect(stateToProps, actionToProps)(Index);
