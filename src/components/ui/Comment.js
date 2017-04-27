import React from 'react';
import TextBox from 'components/elements/TextBox';
import PropTypes from 'prop-types';

const Comment = ({ id, comment }) => (
  <div id={id}>
    <TextBox>{comment}</TextBox>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.string,
  id: PropTypes.number
};

export default Comment;
