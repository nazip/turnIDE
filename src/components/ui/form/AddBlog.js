import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from 'components/ui/form/renderField';

const AddBlog = ({ handleSubmit, pristine, submitting, reset }) => (
  <form className="ui form" onSubmit={handleSubmit}>
    <Field label="title" component={renderField} name="title" type="text"/>
    <Field label="author" component={renderField} name="author" type="text"/>
    <Field label="Created At"
      component={renderField} name="createdAt" type="text"/>
    {(!pristine && !submitting) &&
      <button className="ui button" onClick={reset}>Clear</button>}
    <input className="ui button primary" type="submit" value="Save"/>
  </form>
);

AddBlog.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func
};

export default AddBlog;
