import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import './Logout.css'
const Logout = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
     e.preventDefault();
     dispatch(logout())
  }
  return (
    <div className='logout'>
        <h1>Welcome <span className='user__name'>{user.name}</span></h1>
        <button onClick={(e) => handleLogOut(e)} className='logout__button'>Logout</button>
    </div>
  )
}

export default Logout