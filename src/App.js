import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Office from "./components/Office";
import Hostel from "./components/Hostel";
import Faculty from "./components/Faculty";
import Appointments from "./components/Employees/Appointments";
function App() {
	return (
		<div>
			<ToastContainer />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/employees" element={<Appointments />} />
					<Route path="/office" element={<Office />} />
					<Route path="/hostel" element={<Hostel />} />
					<Route path="/faculty" element={<Faculty />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
