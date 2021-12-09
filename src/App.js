import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Employees from "./components/Employees/Employees";

import React from "react";
function App() {
	return (
		<div>
			<ToastContainer />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/employees" element={<Employees />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
