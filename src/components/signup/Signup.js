import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";



function Signup() {
    let navigate = useNavigate();

    const [lastname, setLastName] = useState();
    const [firstname, setFirstName] = useState();
    const [age, setAge] = useState();
    const [contact, setContact] = useState();
    const [password, setPassword] = useState()
    const [signUpResponse, setSignUpResponse] = useState()
    localStorage.setItem('phonenumber', contact);
    const handleAccount = async () => {
        await axios
            .post("http://localhost:3001/createProfile", {
                LastName: lastname,
                FirstName: firstname,
                Age: age,
                Contact: contact,
                password: password
            })
            .then((res) => {
                toast.success(res.data.message);
                setSignUpResponse(res.data)
                if (res && res.data.userCreated === true) {
                    navigate(`/home`)
                }
            });
       
    }
    return (
        <div
            className="home"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor:"black"
            }}
        >
            <h2 className='label'>Fill The Details to Create a Account</h2>
            <label className='label'>First Name</label>
            <input
                className="input-form"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <label className='label' >Last Name</label>
            <input
                className="input-form"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
            />
            <label  className='label' >Age</label>
            <input
                className="input-form"
                type="text"
                onChange={(e) => setAge(e.target.value)}
            />
            <label className='label' >Contact</label>
            <input
                className="input-form"
                type="Number"
                onChange={(e) => setContact(e.target.value)}
            />
            <label  className='label'>Password</label>
            <input
                className="input-form"
                type="Number"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button style={{marginTop:"20px"}} className="loginButton" onClick={() => handleAccount()}>
                Create Account
            </button>

        </div>
    )
}

export default Signup