import { connect } from 'react-redux';
import BlogList from 'components/containers/BlogList';
import { incLike } from 'components/redux/actions/Like';
import * as type from 'components/redux/const/actionTypes/Posts';
import { fetchPosts } from 'components/redux/actions/Posts';
import store  from 'components/redux/store';

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
    like: (id) => (dispatch(incLike(id))),
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
      }
  }
);

export default connect(stateToProps, actionToProps)(BlogList);
