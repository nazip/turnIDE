import { connect } from 'react-redux';
import Pagination from 'components/elements/Pagination';
import * as type from 'components/redux/const/actionTypes/Pagination';


const stateToProps = (state) => (
  {
    pageSize: state.posts.pagination.pageSize,
    activePage: state.posts.pagination.activePage,
    pageCount: state.posts.pagination.pageCount
  }
);

const actionToProps = (dispatch) => (
  {
    setPageSize: (pageSize) => dispatch({type: type.SET_PAGESIZE, pageSize}),
    setActivePage: (activePage) => dispatch(
      {type: type.SET_ACTIVEPAGE, activePage})
  }
);

export default connect(stateToProps, actionToProps)(Pagination);
