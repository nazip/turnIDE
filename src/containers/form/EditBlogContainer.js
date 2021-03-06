import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import EditBlog from 'components/ui/form/EditBlog';
import { updatePost } from 'components/redux/actions/Post';

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


const stateToProps = (state) => (
  {
    initialValues: {
      id: state.post.entry.id,
      title: state.post.entry.txt,
      author: state.post.entry.metadata.author
    }
  }
);

const onSubmit = (values, dispatch) => {
  dispatch(updatePost(values));
};

export default connect(
  stateToProps
)(reduxForm({
  form: 'EditBlog',
  validate,
  warn,
  onSubmit
})(EditBlog));
