import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Logout.css';
import { logout, selectUser } from '../features/userSlice';

function Logout() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className='logout'>
      <h1>Welcome,<span>{user.name}</span></h1>
      <button className='logout_btn' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
