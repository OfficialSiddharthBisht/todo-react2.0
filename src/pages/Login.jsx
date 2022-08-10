import React from 'react'
import axios from 'axios'
const initailState = {
  username :"",
  password: ""
};
export const Login = () => {
  const [loginData , setLoginData] = React.useState(initailState);
  // console.log(Object.values(signupData));
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
    axios({
      method : "post",
      url : "https://masai-api-mocker.herokuapp.com/auth/login",
      data : loginData
    }).then(res=>{
      
    }).catch(res =>{

    })
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
