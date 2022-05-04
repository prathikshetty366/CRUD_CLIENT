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
      .then((res) =>{ setUserDara(res.data)
        if (res.data && res.data.result && res.data.result[0].Contact === number && res.data.result[0].password === password) {
          navigate(`/home`)
        } else {
          console.log("Invalid Credential")
        }
      });
   
  }
  return (
    <>
      <div className='login'>
        <label className='label'>Enter Your Registered Number</label>
        <input
          className="input-form"
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          placeholder="ex:Pratheek"
        />
        <label className='label'>Enter Your  password</label>
        <input
          className="input-form"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="ex:****"

        />
        <button className='loginButton' onClick={handleLogin}>Login</button>
        <Link to="/signup">
          <h6 className='newUserButton'>If You're a New User Please Signup</h6> </Link>
        <Link to="/Admin">   <h6 className='newUserButton'>Login As Admin</h6></Link>

      </div>

    </>
  )
}

export default Login