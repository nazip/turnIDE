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
    {uploadFile &&
      <Img img={{src: uploadFile[0].preview, width: 200, height: 200 }}/>}
  </div>
);

UploadFile.propTypes = {
  onDrop: PropTypes.func,
  uploadFile: PropTypes.array
};


export default UploadFile;
