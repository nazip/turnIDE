import { connect } from 'react-redux';
import Comment from 'components/ui/Comment';

const stateToProps = (state) => (
  {
    comments: (id) => state.posts.comments.filter(
                 (comment) => (comment.post_id == id)).comment
  }
);


export default connect(stateToProps)(Comment);
