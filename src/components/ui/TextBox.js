import React, { PropTypes } from 'react';
import { Label } from 'semantic-ui-react';

const TextBox = ({children = ''}) => (
  <Label basic>{children}</Label>
);

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
