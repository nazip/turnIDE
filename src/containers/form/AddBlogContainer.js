import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AddBlog from 'components/ui/form/AddBlog';
import { addPost } from 'components/redux/actions/Posts';

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


const stateToProps = () => (
  {
    initialValues: {
      title: '',
      author: '',
      createdAt: '2017-01-01'
    }
  }
);

const onSubmit = (post, dispatch) => (
   dispatch(addPost(post))
);

export default connect(
  stateToProps
)(reduxForm({
  form: 'AddBlog',
  validate,
  warn,
  onSubmit
})(AddBlog));
