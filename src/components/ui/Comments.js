import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/ui/Comment';

const Comments = ({ comments }) => (
  <div>
    {comments.map((comment) =>
      <Comment key={comment.id} comment={comment.comment}/>)
    }
  </div>
);

Comments.propTypes = {
  id: PropTypes.number,
  comments: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
};

export default Comments;
