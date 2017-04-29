import React from 'react';
import TextBox from 'components/elements/TextBox';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const Comment = ({ id, comment, phone }) => (
  <div id={id}>
    <TextBox>{comment}</TextBox>
    <Label>{phone}</Label>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.number
};

export default Comment;
