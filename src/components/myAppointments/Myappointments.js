import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Myappointments() {
    // const number= localStorage.getItem("phonenumber");
    const [mySlots, setMySlots] = useState([]);
    const myOrders = async () => {
        const number = localStorage.getItem("phonenumber");
        console.log(number, "number from local storage")
        await axios
            .get(`http://localhost:3001/myorders`, {
                params: {
                    contact: number
                }
            })
            .then((res) => setMySlots(res.data.result));
        console.log(mySlots, "my SLots")
    }
    useEffect(() => {

        myOrders()
    }, [])
    return (
        <div>
            {mySlots && mySlots.map((slot) => {
                return (
                    <div className="appointments">
                        <span>First Name : {slot.First_Name}</span>
                        <span>Last Name :{slot.Last_Name}</span>
                        <span>Purpose of visit : {slot.Purpose}</span>
                        <span>Date of Appointment : {slot.WHEN_TO_VISIT}</span>
                        <span>whom To Meet : {slot.WHOM_TO_VISIT}</span>
                        {/* <span>{slot.Whom_to_visit}</span> */}
                        <div style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "7px" }}>
                            {slot.statusCode === 0 ?
                                <span>Appointment Initiated</span> : slot.statusCode === 1 ? <span>Wow!! Your appointment is Successfully Scheduled</span> : <span>Sorry!! You're Appointment is rejected</span>}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Myappointments