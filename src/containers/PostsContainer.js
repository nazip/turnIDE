import { connect } from 'react-redux';
import BlogList from 'components/containers/BlogList';
import * as type from 'components/redux/const/actionTypes/Posts';
import { fetchPosts } from 'components/redux/actions/Posts';
import store  from 'components/redux/store';
import { postsPath } from 'helpers/routes';

const stateToProps = (state) => (
  {
    items: state.posts.entries,
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
        dispatch({type: type.SET_PAGESIZE, pageSize});
        dispatch(fetchPosts(store.getState().posts.pagination.activePage,
                            store.getState().posts.pagination.pageSize))
        .catch(dispatch({type: type.SET_PAGESIZE, pageSize: oldPageSize}));
      },
    changeActivePage:
      (activePage) => {
        dispatch(fetchPosts(activePage,
          store.getState().posts.pagination.pageSize));
      },
    linkToBlog: (id) => postsPath(id)
  }
);

export default connect(stateToProps, actionToProps)(BlogList);
