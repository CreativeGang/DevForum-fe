import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../common/layout/Navbar/index';

import User from './User';
import { loadAllUsers, selectNumberOfPosts } from '../../store/users';
import './User.css';

function UsersPage() {
  const dispatch = useDispatch();
  const users = useSelector(selectNumberOfPosts);

  useEffect(() => {
    dispatch(loadAllUsers());
  }, []);

  return (
    <>
      <NavBar />

      <div className='usersPart'>
        {users.map((user) => {
          return <User key={user._id} content={user} />;
        })}
      </div>
    </>
  );
}

export default UsersPage;
