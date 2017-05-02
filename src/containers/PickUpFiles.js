import { connect } from 'react-redux';
import UploadFile from 'components/ui/UploadFile';
import { POST_FILE_UPLOAD } from 'components/redux/const/actionTypes/Post';

const stateToProps = (state) => (
  {
    uploadFile: state.post.uploadFile
  }
);

const actionToProps = (dispatch) => (
  {
    onDrop:
      (acceptFile) => dispatch({type: POST_FILE_UPLOAD, acceptFile})
  }
);

export default connect(stateToProps, actionToProps)(UploadFile);
