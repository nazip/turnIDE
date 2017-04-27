import { connect } from 'react-redux';
import Comments from 'components/ui/Comments';

const stateToProps = (state) => (
  {
    comments: (id) => state.posts.comments.filter(
                 (comment) => (comment.post_id == id))
  }
);


export default connect(stateToProps)(Comments);
