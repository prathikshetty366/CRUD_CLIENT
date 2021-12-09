import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Employees() {
	const [employees, setEmployees] = useState([]);
	const EmployeesData = async () => {
		await axios
			.get("http://localhost:3001/employees")
			.then((res) => setEmployees(res.data));
		console.log(employees, "all the employees in home page");
	};
	useEffect(() => {
		EmployeesData();
	}, [employees && employees.length]);

	const deleteEmployees = (id) => {
		axios
			.delete("http://localhost:3001/delete-employees", {
				data: { id },
			})
			.then((res) => toast.success(res.data));
	};

	return (
		<>
			<Link to="/">
				<button>back</button>
			</Link>
			<div
				className="home"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{employees &&
					employees.map((emp, index) => {
						return (
							<p>
								{emp.name}
								<span
									style={{ padding: 10, margin: 10, color: "Red" }}
									onClick={() => deleteEmployees(index)}
								>
									Delete
								</span>
							</p>
						);
					})}
			</div>
		</>
	);
}

export default Employees;
