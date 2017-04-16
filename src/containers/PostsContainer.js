import { connect } from 'react-redux';
import Index from 'components/views/index';

const stateToProps = (state) => (
  {
    items: state.posts.entries.map((entry) =>
      Object.assign({},entry, {path: `post/${entry.id}`})),
    isFetching: state.posts.isFetching,
    error: state.posts.error,
    pagination: state.posts.pagination
  }
);

export default connect(stateToProps)(Index);
