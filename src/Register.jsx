import React, { useState } from 'react'
import Input from './Input'
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 import { auth } from './config';
const Register = () => {
  const [val,setVal] = useState(
    {
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  )
const [error, seterror] = useState(false)
  const inputs =[
    {
      name:"username",
      type:"text",
      placeholder:"Username",
      id:1
    },
    {
      name:"email",
      type:"email",
      placeholder:"Enter Mail",
      id:2
    },
    {
      name:"password",
      type:"password",
      placeholder:"Enter Passwrord",
      id:3,

    },
    {
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      id:4
    }
  ]
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = val.username
    const email = val.email
    const password = val.password
    try {
      const res= createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
    
    } catch (error) {
      seterror(error)
    }
   
  
 
  }
  const onChange = (e) => {
    setVal({...val, [e.target.name]:e.target.value })
  }
 
  return (
    <div className='Login__form'>
      <form onSubmit={handleSubmit}> 

        <img src="" alt="" />
        <h1>REGISTER</h1>
        {inputs.map((input) => (
          <Input key={input.id} {...input} onChange={onChange}/>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register