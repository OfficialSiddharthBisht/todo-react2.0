import React from 'react'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux';
import {loginSuccess, loginError , loginLoading} from '../store/auth/actions'
import { Navigate } from 'react-router-dom';
const initailState = {
  username :"",
  password: ""
};
export const Login = () => {
  const [loginData , setLoginData] = React.useState(initailState);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const handleChange = (e)=>{
    const {name , value} = e.target;
    setLoginData(prev =>(
      {...prev, [name] :value}
    ));
  }
  const handleLogin =() =>{
    let isValid = true;
    Object.values(loginData).forEach(el =>{
      if(!el){
        isValid = false;
      }
    })
    if(!isValid){
      alert("Please fill all the details");
      return;
    }
    dispatch(loginLoading);
    axios({
      method : "post",
      url : "https://masai-api-mocker.herokuapp.com/auth/login",
      data : loginData
    }).then(res=>{
      dispatch(loginSuccess(res.data.token));
    }).catch(res =>{
      dispatch(loginError());
    })
  }

  if(token){
   return <Navigate to = "/" />
  }

  return (
    <div>
      {Object.keys(loginData).map(el=>(
        <input placeholder={el} key={el} onChange={handleChange} value={loginData[el]} name={el} type="text" />
      ))}
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
