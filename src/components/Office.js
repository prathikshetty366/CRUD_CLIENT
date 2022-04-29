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
	return (
		<div>
			{officeAppointment &&
				officeAppointment.map((off) => {
					return (
						<>
							<div className="appointments">
								<span>{off.User_Name}</span>
								<span>{off.Date_of_visit}</span>
								<span>{off.Department}</span>
								<span>{off.Purpose}</span>
								<span>{off.User_type}</span>
								<span>{off.Whom_to_visit}</span>
							</div>
							<button className="Accept">Accept</button>
							<button className="Reject">Reject</button>
						</>
					);
				})}
		</div>
	);
}

export default Office;
