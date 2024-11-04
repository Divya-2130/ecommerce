import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import'./Signup.css'
export default function Signup() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [mobile,setMobile]=useState("")
    function handleRegister(){
        const newUser={name,email,password,mobile}
        axios.post(`https://mern-ecommerece.onrender.com/api/auth/register`,newUser)
            .then((res)=>{
                console.log(res)
                if(res.status===201)
                    navigate("/login")
            })
    }
    return (
        <div className="signup-container">
            <div className='form-group'>
                <label htmlFor="">Enter Your Name</label>
                <input 
                    name="name" 
                    onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Enter Your Email</label>
                <input 
                    type="email" 
                    onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Enter Your Password</label>
                <input 
                    type="text" 
                    onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Enter Mobile Number</label>
                <input 
                    type="text" 
                    onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}