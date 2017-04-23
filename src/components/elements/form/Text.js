import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <div>
      <label className="ui label" htmlFor={name}>{label}:</label>
    </div>
    <input
      name={name}
      id={name}
      className="ui input"
      type="text"
      value={value}
      onChange={onChange}/>
  </div>
);

Text.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func
};

export default Text;
