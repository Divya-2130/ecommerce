import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
export default function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    function handleLogin(){
        const newUser={email,password}
        axios.post(`https://mern-ecommerece.onrender.com/api/auth/login`,newUser)
            .then((res)=>{
                console.log(res)
                if(res.status===200){
                    localStorage.setItem("userId",res.data.userID)
                    localStorage.setItem("role",res.data.role)
                    navigate("/")
                } 
            })
            .catch((err)=>{
                alert("Invalid credentials")
            })
    }
    return (
        <div className='login-container'>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input 
                    type="text" 
                    onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}
