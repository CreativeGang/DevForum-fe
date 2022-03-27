import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg, show }) => {
  let alertStyle = 'alert alert-info alert-dismissible fade show ';
  alertStyle += msg.includes('problem') ? 'alert-danger' : 'alert-success';

  return (
    <div className={alertStyle} role='alert'>
      {msg}
      <button
        onClick={show}
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
  show: PropTypes.func.isRequired,
};

export default Message;
