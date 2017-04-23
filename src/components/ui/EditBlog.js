import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import classNames from 'classnames';

const validate = (values) => {
  const errors = {};

  if (values.title.length < 3)
    errors.title = 'length must be more 3 letter';
  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.title.length < 5)
    warnings.title = 'length should be more 5 letter';
  return warnings;
};


const renderField = ({ input, label, type,
                       meta: { touched, error, warning }}) =>
(
  <div className={classNames('ui field', {error})}>
    <label>{label}</label>
    <input className="ui input" {...input} type={type}/>
    {touched && (error && (<div className="ui red label">{error}</div>)
    || (warning && (<div className="ui red label">{warning}</div>))
    )}
  </div>
);

const EditBlog = ({ handleSubmit, pristine, submitting, reset }) => (
  <form className="ui form" onSubmit={handleSubmit}>
    <Field label="title" component={renderField} name="title" type="text"/>
    <Field label="author" component={renderField} name="author" type="text"/>
    {(!pristine && !submitting) &&
      <button className="ui button" onClick={reset}>Clear</button>}
    <input className="ui button primary" type="submit" value="Update"/>
  </form>
);

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry.txt,
      author: state.post.entry.metadata.author
    }
  })
)(reduxForm({
  form: 'EditBlog',
  validate,
  warn,
  onSubmit: (values) => alert(JSON.stringify(values))
})(EditBlog));
