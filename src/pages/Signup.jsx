import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {signupSuccess, signupError , signupLoading} from '../store/auth/actions'
import {Navigate} from 'react-router-dom';
const initailState = {
  name: "",
  email: "",
  password: "",
  username : "",
  mobile : "",
  description: ""
};
export const Signup = () => {
  const [signupData , setSignupData] = React.useState(initailState);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const handleChange = (e)=>{
    const {name , value} = e.target;
    setSignupData(prev =>(
      {...prev, [name] :value}
    ));
  }
  const handleSignup =() =>{
    let isValid = true;
    Object.values(signupData).forEach(el =>{
      if(!el){
        isValid = false;
      }
    })
    if(!isValid){
      alert("Please fill all the details");
      return;
    }
    dispatch(signupLoading());
    axios({
      method : "post",
      url : "https://masai-api-mocker.herokuapp.com/auth/register",
      data : signupData
    }).then(res=>{
      dispatch(signupSuccess());
      setSignupData(initailState);
    }).catch(res =>{
      dispatch(signupError());
    })
  }

  if(token){
    return <Navigate to = "/" />
  }
  return (
    <div>
      {Object.keys(signupData).map(el=>(
        <input placeholder={el} key={el} onChange={handleChange} value={signupData[el]} name={el} type="text" />
      ))}
      <br/>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}
