import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
  const [showAlert, setShowAlert] = useState(true);
  let alertStyle = 'alert alert-info alert-dismissible fade show ';
  alertStyle += msg.includes('problem') ? 'alert-danger' : 'alert-success';
  let alterDisplay = { display: showAlert ? 'block' : 'none' };
  return (
    <div className={alertStyle} role='alert' style={alterDisplay}>
      {msg}
      <button
        onClick={() => setShowAlert(!showAlert)}
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
