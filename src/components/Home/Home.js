import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import Modal from 'react-modal';


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const Home = () => {
	const [lastname, setLastName] = useState("");
	const [firstname, setFirstName] = useState("");
	const [age, setAge] = useState(0);
	const [date, setDate] = useState();
	const [Whom_to_visit, setWhomToVisit] = useState("");
	const [purpose, setPurpose] = useState("");
	const [Department, setDeparment] = useState("");
	const [userType, setUserType] = useState("");
	const [contact, setContact] = useState();
	const [modalIsOpen, setIsOpen] = React.useState(false);
	let subtitle;

	//   function openModal() {
	//     setIsOpen(true);
	//   }

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
		window.location.reload();
	}
	const handleSubmit = async () => {
		await axios
			.post("http://localhost:3001/create", {
				LastName: lastname,
				FirstName: firstname,
				Age: age,
				whenToVisit: date,
				whomToVisit: Whom_to_visit,
				Purpose: purpose,
				Department: Department,
				whoAreYou: userType,
				Contact: contact,
				statusCode: 0,
			})
			.then((res) => {
				setIsOpen(true)
			});
	};


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
				<h2>Book your appointment</h2>
				<label>First Name</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<label>Last Name</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<label>Age</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setAge(e.target.value)}
				/>
				<label>Date ofvisit</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setDate(e.target.value)}
				/>
				<label>Whom To Meet</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setWhomToVisit(e.target.value)}
				/>
				<label>purpose</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setPurpose(e.target.value)}
				/>
				<label>Department</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setDeparment(e.target.value)}
				/>
				<label>User Type</label>
				<input
					className="input-form"
					type="text"
					onChange={(e) => setUserType(e.target.value)}
				/>
				<label>contact</label>

				<input
					className="input-form"
					type="Number"
					onChange={(e) => setContact(e.target.value)}
				/>
				<button className="submt-button" onClick={() => handleSubmit()}>
					create appointment
				</button>

			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Link to="/myappointments">
					<button className="submt-button">View Your appointments</button>
				</Link>
				{/* <Link to="/employees">
					<button className="submt-button">Viw all the appointments</button>
				</Link> */}
				<hr></hr>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Congrats</h2>
				<h2>Your Appointment Booked Successfully</h2>
				<button className="Accept" onClick={closeModal}>close</button>


			</Modal>
		</>
	);
};
export default Home;
