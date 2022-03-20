import React from 'react';

function User({ content }) {
  return (
    <div className='userPart'>
      <div className='userPart_img'>
        <img
          className='rounded-circle'
          src={
            content.photo === 'default-user.jpg'
              ? require(`../../static/images/${content.photo}`)
              : content.photo
          }
          alt='user-image'></img>
      </div>
      <div className='userPart__details'>
        <h2>{content.name}</h2>
        <h4>{content.numOfPost}</h4>
        <ul>{content.occupation}</ul>
      </div>
    </div>
  );
}

export default User;
