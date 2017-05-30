import { connect } from 'react-redux';
import Comments from 'components/ui/Comments';
import filter from 'lodash/filter';

const stateToProps = (state, ownProps) => (
  {
    comments: filter(state.posts.comments, { postId:  ownProps.id })
  }
);


export default connect(stateToProps)(Comments);
