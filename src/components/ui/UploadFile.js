import React from 'react';
import Dropzone from 'react-dropzone';
import Img from 'components/elements/Img';
import PropTypes from 'prop-types';

const UploadFile = ({onDrop, uploadFile}) => (
  <div>
    <Dropzone accept='image/png'
              onDrop={onDrop}>
      <p>Drop files here.</p>
    </Dropzone>
    {uploadFile.preview &&
      <Img img={{src: uploadFile.preview, width: 200, height: 200 }}/>}
  </div>
);

UploadFile.propTypes = {
  onDrop: PropTypes.func,
  uploadFile: PropTypes.object
};


export default UploadFile;
