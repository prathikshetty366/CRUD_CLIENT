import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Office from "./components/Office";
import Hostel from "./components/Hostel";
import Faculty from "./components/Faculty";
import Login from "./components/Login/Login";
import Myappointments from "./components/myAppointments/Myappointments";
import ChooseDepartment from "./components/Department/ChooseDepartment";
function App() {
	return (
		<div>
			<ToastContainer />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/myappointments" element={<Myappointments />} />
					<Route path="/Admin" element={<ChooseDepartment />} />
					<Route path="/office" element={<Office />} />
					<Route path="/hostel" element={<Hostel />} />
					<Route path="/faculty" element={<Faculty />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
