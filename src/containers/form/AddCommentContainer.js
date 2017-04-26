import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AddComment from 'components/ui/form/AddComment';
import { addComment } from 'components/redux/actions/Post';

const validate = (values) => {
  const errors = {};

  if (values.comment.length < 3)
    errors.comment = 'length must be more 3 letter';
  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.comment.length < 5)
    warnings.comment = 'length should be more 5 letter';
  return warnings;
};


const stateToProps = (state) => (
  {
    initialValues: {
      id: state.post.entry.id,
      comment: ''
    }
  }
);

const onSubmit = (post, dispatch) => (
   dispatch(addComment(post))
);

export default connect(
  stateToProps
)(reduxForm({
  form: 'AddComment',
  validate,
  warn,
  onSubmit
})(AddComment));
