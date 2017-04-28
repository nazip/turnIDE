import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from 'components/ui/form/renderField';
import { phoneNormalize } from 'components/ui/form/Normalizers';

const AddComment = ({ handleSubmit, pristine, submitting, reset }) => (
  <form className="ui form" onSubmit={handleSubmit}>
    <Field label="comment" component={renderField} name="comment" type="text"/>
    <Field label="phone"
           component={renderField}
           name="phone"
           normalize={phoneNormalize}
           type="text"/>
    {(!pristine && !submitting) &&
      <button className="ui button" onClick={reset}>Clear</button>}
    <input className="ui button primary" type="submit" value="Save"/>
  </form>
);

AddComment.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func
};

export default AddComment;
