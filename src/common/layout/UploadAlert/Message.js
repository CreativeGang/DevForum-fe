import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
  const [display, setDisplay] = useState({ display: 'block' });
  let alertStyle = 'alert alert-info alert-dismissible fade show ';
  alertStyle += msg.includes('problem') ? 'alert-danger' : 'alert-success';
  return (
    <div className={alertStyle} role='alert' style={display}>
      {msg}
      <button
        onClick={() => setDisplay({ display: 'none' })}
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
