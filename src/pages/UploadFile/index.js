import React from 'react';
import FileUpload from '../../common/layout/FileUpload/FileUpload';

const uploadFile = () => (
  <div className='container' style={{ marginTop: '140px' }}>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Photo Upload
    </h4>
    <FileUpload />
  </div>
);

export default uploadFile;
