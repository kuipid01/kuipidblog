import React, { useState } from 'react'
import Input from './Input'
import {  signInWithEmailAndPassword } from "firebase/auth";
 import { auth } from './config';
 import { useNavigate } from 'react-router-dom';
const Login = () => {
  
  const [val,setVal] = useState(
    {
    email:"",
    password:"",
  }
  )

  const inputs =[
    {
      name:"email",
      type:"text",
      placeholder:"Email",
      id:1
    },
   
    {
      name:"password",
      type:"password",
      placeholder:"Enter Passwrord",
      id:3,

    },]
    const onChange =  (e) => {
      setVal({...val, [e.target.name]: e.target.value})
    }
    console.log(val);
    const navigate = useNavigate();
    const handleLogin = async (e) =>{
      e.preventDefault()
      const email = val.email;
      const password = val.password;
      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        
      } catch (error) {
        console.log(error);
      }
  
      navigate("/dashboard");
    }
      return (
    <div className='Login__form'>
      <form> 

        <img src="" alt="" />
        <h1>LOG IN</h1>
        {
          inputs.map(inp=>
            <Input key={inp.id} {...inp} onChange={ onChange}/>
            )
        }
        
       
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login