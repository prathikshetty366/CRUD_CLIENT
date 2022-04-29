import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Hostel() {
	const [hostel, sethostel] = useState([]);
	const hostelData = async () => {
		await axios
			.get("https://d6b2-115-242-147-90.in.ngrok.io/appointments	")
			.then((res) => sethostel(res.data));
		console.log(hostel, "all the hostel in home page");
	};
	useEffect(() => {
		hostelData();
	}, [hostel && hostel.length]);
	const HostelAppointment =
		hostel && hostel.filter((hos) => hos.Department === "hostel");

	const handleAccept = async (id, e) => {
		await axios
			.put(`http://localhost:3001/Accept`, {
				id: id
			})
			.then((res) => toast.success(res.data));
		hostelData()

	}

	const handleReject = async (id, e) => {
		await axios
			.put(`http://localhost:3001/Reject`, {
				id: id
			})
			.then((res) => toast.success(res.data));
		hostelData()
	}
	return (
		<div>
			{HostelAppointment && HostelAppointment.length !== 0 ?
				HostelAppointment.map((hos) => {
					return (
						<>
							<div className="appointments">
								<span>First Name:{hos.First_Name}</span>
								<span>Last Name:{hos.Last_Name}</span>
								<span>Purpose of visit:{hos.Purpose}</span>
								<span>Date of appointment:{hos.WHEN_TO_VISIT}</span>
								<span>Whom to Meet:{hos.WHOM_TO_VISIT}</span>
								<span>Who is he:{hos.WHO_ARE_YOU}</span>
							</div>
							{hos.statusCode === 0 ? <button onClick={(e) => { handleAccept(hos.Personid, e) }} className="Accept">Accept</button> : hos.statusCode === 1 ? <span className="Accept">You  Accepted this Request</span> : <span>You Rejected this Request</span>}
							{hos.statusCode === 0 ? <button onClick={(e) => { handleReject(hos.Personid, e) }} className="Reject">Reject</button> : <span></span>}
						</>
					);
				}
				)
				: <span>You dont have any appointments</span>
			}
		</div>
	);
}

export default Hostel;
