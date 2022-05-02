import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Office() {
	const [office, setoffice] = useState([]);
	const officeData = async () => {
		await axios
			.get("http://localhost:3001/appointments	")
			.then((res) => setoffice(res.data));
		console.log(office, "all the office in home page");
	};
	useEffect(() => {
		officeData();
	}, [office && office.length]);
	const officeAppointment =
		office && office.filter((off) => off.Department === "office");


	const handleAccept = async (id, e) => {
		await axios
			.put(`http://localhost:3001/Accept`, {
				id: id
			})
			.then((res) => toast.success(res.data.message));
		officeData()

	}

	const handleReject = async (id, e) => {
		await axios
			.put(`http://localhost:3001/Reject`, {
				id: id
			})
			.then((res) => toast.success(res.data.message));
		officeData()
	}
	return (
		<div>
			{officeAppointment && officeAppointment.length !== 0 ?
				officeAppointment.map((off) => {
					return (
						<>
							<div className="appointments">
								<span>First Name:{off.First_Name}</span>
								<span>Last Name:{off.Last_Name}</span>
								<span>Purpose of visit:{off.Purpose}</span>
								<span>Date of appointment:{off.WHEN_TO_VISIT}</span>
								<span>Whom to Meet:{off.WHOM_TO_VISIT}</span>
								<span>Who is he:{off.WHO_ARE_YOU}</span>
							</div>
							{off.statusCode === 0 ? <button onClick={(e) => { handleAccept(off.Personid, e) }} className="Accept">Accept</button> : off.statusCode === 1 ? <span className="Accept">You  Accepted this Request</span> : <span className="Reject">You Rejected this Request</span>}
							{off.statusCode === 0 ? <button onClick={(e) => { handleReject(off.Personid, e) }} className="Reject">Reject</button> : <span></span>}
						</>
					);
				})
				: <span>You dont have any appointments</span>
			}
		</div>
	);
}

export default Office;
