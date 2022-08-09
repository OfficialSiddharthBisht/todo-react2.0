import React from 'react'
import axios from 'axios'
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
  // console.log(Object.values(signupData));
  const handleChange = (e)=>{
    const {name , value} = e.target;
    setSignupData(prev =>(
      {...prev, [name] :value}
    ));
  }
  const handleSignup =() =>{
    axios({
      method : "post",
      url : "https://masai-api-mocker.herokuapp.com/auth/register",
      data : signupData
    })
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
