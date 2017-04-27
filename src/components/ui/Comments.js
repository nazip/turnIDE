import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/ui/Comment';

const Comments = ({ comments, id }) => {
  if (!`${comments(id)}`) return null;
  const a = comments(id);
  return <div>
          {a.map((comment) =>
            <Comment key={comment.id} comment={comment.comment}/>)
          }
         </div>;
};

Comments.propTypes = {
  comments: PropTypes.func,
  id: PropTypes.number
};

export default Comments;
