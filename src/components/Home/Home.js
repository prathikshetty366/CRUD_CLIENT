import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
	const [name, setName] = useState();
	const [age, setAge] = useState();
	const [position, setPosition] = useState();
	const handleSubmit = () => {
		axios
			.post("http://localhost:3001/create", {
				age: age,
				name: name,
				position: position,
			})
			.then((res) => toast.success(res.data));

		// window.location.reload();
	};
	// const Employees = async () => {
	// 	await axios
	// 		.get("http://localhost:3001/employees")
	// 		.then((res) => setEmployees(res.data));
	// 	console.log(employees, "all the employees in home page");
	// };

	return (
		<>
			<div
				className="home"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2>Fill the form</h2>
				<label>Name</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<label>age</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setAge(e.target.value)}
				/>
				<label>position</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setPosition(e.target.value)}
				/>
				<button className="submt-button" onClick={() => handleSubmit()}>
					submit
				</button>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Link to="/employees">
					<button className="submt-button">Show Employees</button>
				</Link>
				<hr></hr>
				{/* <button className="submt-button" onClick={() => deleteEmployees()}>
					Delete Employees
				</button> */}
			</div>
		</>
	);
};
export default Home;
