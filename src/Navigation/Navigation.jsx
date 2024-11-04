import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Navigation.css' 
export default function Navigation() {
const navigate =useNavigate()
  const userRole=localStorage.getItem("role")
  const userId=localStorage.getItem("userId")
  function handleLogout(){
    localStorage.removeItem("userId")
    localStorage.removeItem("role")
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      {
        userId?(
          <>
            {
              userRole==="admin" && <Link to="/addproduct">Add Product</Link>
            }
            <Link to="/cart">Cart</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ):(
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )
      }
    </div>
  )
}

