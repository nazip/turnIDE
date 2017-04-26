import React from 'react';
import TextBox from 'components/elements/TextBox';
import PropTypes from 'prop-types';

const Comment = ({comments, id}) => (
  <div>
    <TextBox>{`${comments(id)}`}</TextBox>
  </div>
);

Comment.propTypes = {
  comments: PropTypes.array,
  id: PropTypes.integer
};

export default Comment;
