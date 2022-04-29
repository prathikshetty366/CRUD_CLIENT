import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Appointments() {
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
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
					}}
				>
					<h1>Choose Your Department</h1>
					<Link to="/office">
						<span className="Department">Office</span>
					</Link>
					<Link to="/faculty">
						<span>Faculty</span>
					</Link>
					<Link to="/hostel">
						<span>Hostel</span>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Appointments;
