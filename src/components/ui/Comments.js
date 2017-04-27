import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/ui/Comment';

const Comments = ({ comments, id }) => {
  const commentsArray = Array.isArray(comments) ? comments : comments(id);
  return <div>
          {commentsArray.map((comment) =>
            <Comment key={comment.id} comment={comment.comment}/>)
          }
         </div>;
};

Comments.propTypes = {
  id: PropTypes.number,
  comments: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
};

export default Comments;
