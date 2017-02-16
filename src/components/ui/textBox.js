import React, { PropTypes } from 'react';
import { Label } from 'semantic-ui-react';

const TextBox = ({txt = ''}) => (
  <Label basic content={txt}/>
);

TextBox.propTypes = {
  txt: PropTypes.string
};

export default TextBox;
