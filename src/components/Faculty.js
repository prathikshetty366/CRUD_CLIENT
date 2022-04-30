import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Faculty() {
	const [faculty, setfaculty] = useState([]);
	const facultyData = async () => {
		await axios
			.get(`http://localhost:3001/appointments	`)
			.then((res) => setfaculty(res.data));
		console.log(faculty, "all the faculty in home page");
	};
	useEffect(() => {
		facultyData();
	}, [faculty && faculty.length]);
	const officeAppointment =
		faculty && faculty.filter((emp) => emp.Department === "faculty");

	const handleAccept = async (id, e) => {
		await axios
			.put(`http://localhost:3001/Accept`, {
				id: id
			})
			.then((res) => toast.success(res.data.message));
		facultyData()

	}

	const handleReject = async (id, e) => {
		await axios
			.put(`http://localhost:3001/Reject`, {
				id: id
			})
			.then((res) => toast.success(res.data.message));
		facultyData()
	}
	return (
		<div>
			{officeAppointment && officeAppointment.length !== 0 ?
				officeAppointment.map((fac, index) => {
					return (
						<>
							<div className="appointments">
								<span>First Name:{fac.First_Name}</span>
								<span>Last Name: {fac.Last_Name}</span>
								<span>Purpose of visit: {fac.Purpose}</span>
								<span>Date of appointment: {fac.WHEN_TO_VISIT}</span>
								<span>Whom to Meet: {fac.WHOM_TO_VISIT}</span>
								<span>Who is he: {fac.WHO_ARE_YOU}</span>
							</div>
							{fac.statusCode === 0 ? <button onClick={(e) => { handleAccept(fac.Personid, e) }} className="Accept">Accept</button> : fac.statusCode === 1 ? <span className="Accept">You Already Accepted this Request</span> : <span className="Reject">You Rejected this Request</span>}
							{fac.statusCode === 0 ? <button onClick={(e) => { handleReject(fac.Personid, e) }} className="Reject">Reject</button> : <span></span>}
						</>
					);
				}) : <span>You dont have any appointments</span>
			}
		</div>
	);
}

export default Faculty;
