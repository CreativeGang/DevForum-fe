import React, { Fragment, useState } from 'react';
import Message from '../UploadAlert/Message';
import Progress from '../ProgressBar/Progress';
import { Buffer } from 'buffer';
import axios from 'axios';
// import downloadImage from '../Helper/downLoadImage';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [photo, setPhoto] = useState('');

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const loadPhoto = async () => {
    const response = await axios.get(
      'http://localhost:3000/v1/users/get_user_photo',
      {
        responseType: 'arraybuffer',
      }
    );
    setPhoto(Buffer.from(response.data, 'binary').toString('base64'));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(
        'http://localhost:3000/v1/users/upload_photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        }
      );

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 5000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      setMessage(err.response.data.msg);

      setUploadPercentage(0);
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
            accept='image/*'
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}

      <div className='container'>
        <div className='row'>
          <div className='col align-self-center'>
            <button onClick={loadPhoto}> downloadImage </button>
          </div>
          {photo !== '' ? (
            <div className='col align-self-center'>
              <img
                style={{ maxWidth: '300px', height: 'auto' }}
                src={`data:;base64,${photo}`}
                alt='UploadedPhoto'
              />
            </div>
          ) : (
            <p> No images</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default FileUpload;
