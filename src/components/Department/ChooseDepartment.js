import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './ChooseDepartment.css'
function ChooseDepartment() {
	return (
		<>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "aqua",
					borderRadius: "10px",
					height: "50vh",
					margin: "10px"
				}}
			>

				<h1 style={{ padding: "10px" }}>Choose Your Department</h1>
				<Link to="/office">
					<span className="dept-option">Office</span>
				</Link>
				<Link to="/faculty">
					<span className="dept-option">Faculty</span>
				</Link>
				<Link to="/hostel">
					<span className="dept-option">Hostel</span>
				</Link>
			</div>
		</>
	);
}

export default ChooseDepartment;
