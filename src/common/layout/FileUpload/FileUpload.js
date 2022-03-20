import React, { Fragment, useState } from 'react';
import Message from '../UploadAlert/Message';
import Progress from '../ProgressBar/Progress';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [photoURL, setPhotoURL] = useState('');

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + '/v1/users/upload_photo',
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
      setPhotoURL(res.data.imagePath);
      setMessage('File Uploaded');
      // await loadPhoto();
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: '40px',
          marginTop: '20px',
        }}>
        <Link to='/dashboard'>Go back to dashboard</Link>
      </div>

      {photoURL ? (
        <>
          <div
            className='alert alert-primary'
            role='alert'
            style={{
              maxWidth: '250px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
            <h1> profile photo updated !!</h1>
          </div>

          <img
            className='img-fluid'
            style={{ display: 'block', margin: '20px auto' }}
            src={photoURL}
            alt='UploadedPhoto'
          />
        </>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default FileUpload;
