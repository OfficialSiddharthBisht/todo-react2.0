import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/auth/actions';
export const Home = () => {
  const token  = useSelector(state => state.token);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Home</h2>
      {!!token ? <button onClick={()=>dispatch(logout())}>Logout</button>: null}
    </div>
  )
}
