import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AddBlog from 'components/ui/form/AddBlog';
import { POSTS_ADD_TOGGLE } from 'components/redux/const/actionTypes/Posts';

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
      author: ''
    }
  }
);

const onSubmit = (values, dispatch) => {
  alert(JSON.stringify(values));
  dispatch({type: POSTS_ADD_TOGGLE});
};

export default connect(
  stateToProps
)(reduxForm({
  form: 'AddBlog',
  validate,
  warn,
  onSubmit
})(AddBlog));
