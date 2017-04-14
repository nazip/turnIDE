import React from 'react';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TextBox = ({children = ''}) => (
  <Label basic>{children}</Label>
);

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
