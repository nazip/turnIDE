import { connect } from 'react-redux';
import Pagination from 'components/elements/Pagination';
import { fetchPosts } from 'components/redux/actions/Posts';

const makeButtons = (pageCount) =>  {
  const a = [0..pageCount];
  for (let i = 0; i < pageCount; i++) a[i] = i;
  return a;
};

const stateToProps = (state) => (
  {
    pageSize: state.posts.pagination.pageSize,
    activePage: state.posts.pagination.activePage,
    pageCount: state.posts.pagination.pageCount,
    buttons: makeButtons(state.posts.pagination.pageCount)
  }
);

const actionToProps = (dispatch) => (
  {
    setPageSize: (pageSize) => dispatch(fetchPosts(0,pageSize)),
    setActivePage: (activePage) => dispatch(fetchPosts(activePage))
  }
);

export default connect(stateToProps, actionToProps)(Pagination);
