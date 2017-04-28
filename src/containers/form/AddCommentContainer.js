import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AddComment from 'components/ui/form/AddComment';
import { addComment } from 'components/redux/actions/Post';
import { POST_ADD_COMMENT_TOGGLE } from
  'components/redux/const/actionTypes/Post';

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
      comment: '',
      phone: ''
    }
  }
);

const onSubmit = (values, dispatch) => (
   dispatch(addComment(values)).then(
     dispatch({type: POST_ADD_COMMENT_TOGGLE})
   )
);

export default connect(
  stateToProps
)(reduxForm({
  form: 'AddComment',
  validate,
  warn,
  onSubmit
})(AddComment));
