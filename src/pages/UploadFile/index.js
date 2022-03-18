import React from 'react';
import FileUpload from '../../common/layout/FileUpload/FileUpload';

const uploadFile = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Photo Upload
    </h4>

    <FileUpload />
  </div>
);

export default uploadFile;
