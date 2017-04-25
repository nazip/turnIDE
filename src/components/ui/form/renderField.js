import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const renderInput = ({ input, label, type,
                       meta: { touched, error, warning }}) =>
(
  <div className={classNames('ui field', {error})}>
    <label>{label}</label>
    <input className="ui input" {...input} type={type}/>
    {touched && (error && (<div className="ui red label">{error}</div>)
    || (warning && (<div className="ui yellow label">{warning}</div>))
    )}
  </div>
); 

renderInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  meta: PropTypes.object
};

export default renderInput;
