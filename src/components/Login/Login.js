import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from 'react-modal';

  
 
function Login() {
  let navigate = useNavigate();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState()
  const [userData, setUserDara] = useState()
  localStorage.setItem('phonenumber', number);



  const handleLogin = async () => {
    await axios
      .post(`http://localhost:3001/Login`, {
        Contact: number
      })
      .then((res) => setUserDara(res.data));
    if (userData && userData.result && userData.result[0].Contact === number && userData.result[0].password === password) {
      navigate(`/home`)
    } else {
    toast.error("Invalid Credential")
    }
  }
  return (
    <>
    <div className='login'>
      <label>Enter Your Registered Number</label>
      <input
        className="input-form"
        type="text"
        onChange={(e) => setNumber(e.target.value)}
      />
      <label>Enter Your  password</label>
      <input
        className="input-form"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p style={{fontSize:"10px"}}>**Double Click on the Login to verify</p>
<Link to="/signup">
      <h6 style={{ backgroundColor: "orange", padding: "5px", borderRadius: "7px",textDecorationLine:"none",margin:0 }}>If you're a new user please signup</h6> </Link>
      <Link to="/Admin">   <h6 style={{ backgroundColor: "orange", padding: "5px", borderRadius: "7px", textDecoration: "none" }}>Login As Admin</h6></Link>

    </div>
   
  </>
  )
}

export default Login