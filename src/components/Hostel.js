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
	return (
		<div>
			{HostelAppointment &&
				HostelAppointment.map((hos) => {
					return (
						<>
							<div className="appointments">
								<span>{hos.User_Name}</span>
								<span>{hos.Date_of_visit}</span>
								<span>{hos.Department}</span>
								<span>{hos.Purpose}</span>
								<span>{hos.User_type}</span>
								<span>{hos.Whom_to_visit}</span>
							</div>
							<button className="Accept">Accept</button>
							<button className="Reject">Reject</button>
						</>
					);
				})}
		</div>
	);
}

export default Hostel;
