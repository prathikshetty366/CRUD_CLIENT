import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Faculty() {
	const [faculty, setfaculty] = useState([]);
	const facultyData = async () => {
		await axios
			.get(`https://d6b2-115-242-147-90.in.ngrok.io/appointments	`)
			.then((res) => setfaculty(res.data));
		console.log(faculty, "all the faculty in home page");
	};
	useEffect(() => {
		facultyData();
	}, [faculty && faculty.length]);
	const officeAppointment =
		faculty && faculty.filter((emp) => emp.Department === "faculty");
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

export default Faculty;
