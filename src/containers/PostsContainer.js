import { connect } from 'react-redux';
import BlogList from 'components/containers/BlogList';
import * as type from 'components/redux/const/actionTypes/Posts';
import { fetchPosts } from 'components/redux/actions/Posts';
import store  from 'components/redux/store';

const stateToProps = (state) => (
  {
    items: store.getState().posts.entries.map((entry) =>
      Object.assign({},entry, {path: `post/${entry.id}`})),
    isFetching: state.posts.isFetching,
    error: state.posts.error,
    pagination: state.posts.pagination
  }
);

const actionToProps = (dispatch) => (
  {
    changePageSize:
      (pageSize) => {
        const oldPageSize = -1 * pageSize;
        const pagination = store.getState().posts.pagination;
        dispatch({type: type.SET_PAGESIZE, pageSize});
        dispatch(fetchPosts(pagination.activePage, pagination.pageSize))
        .catch(dispatch({type: type.SET_PAGESIZE, pageSize: oldPageSize}));
      },
    changeActivePage:
      (activePage) => {
        dispatch(fetchPosts(activePage,
          store.getState().posts.pagination.pageSize));
      }
  }
);

export default connect(stateToProps, actionToProps)(BlogList);
