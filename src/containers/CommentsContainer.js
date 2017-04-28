import { connect } from 'react-redux';
import Comments from 'components/ui/Comments';
import _ from 'lodash';

const stateToProps = (state, ownProps) => (
  {
    comments: _.filter(state.posts.comments, { postId:  ownProps.id })
  }
);


export default connect(stateToProps)(Comments);
