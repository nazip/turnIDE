import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <div>
      <label className="ui label" htmlFor={name}>{label}:</label>
    </div>
    <textarea
      name={name}
      id={name}
      className="ui input"
      value={value}
      onChange={onChange}/>
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func
};

export default TextArea;
