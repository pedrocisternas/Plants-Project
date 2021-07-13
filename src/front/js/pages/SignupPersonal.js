import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SignupPersonal = props => {
	const { store, actions } = useContext(Context);
	const [userPersonal, setUserPersonal] = useState({
		username: null,
		first_name: null,
		last_name: null,
		email: null,
		password: null
	});

	const userInput = e => {
		setUserPersonal({ ...userPersonal, [e.target.name]: e.target.value });
		// console.log(e.target.name, e.target.value);
	};

	const saveUserInput = () => {
		console.log(userPersonal);
		actions.postUserPersonal(userPersonal);
		//props.history.push("/personal");
	};

	return (
		<form className="container w-50 m-auto">
			<h1 className="text-center heading ">Personal Information</h1>
			<p className="text-center m-0">
				<img src="https://i.imgur.com/2vaTvrN.png" alt="floral design" />
			</p>
			<div className="form-group">
				<label>Username</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="username"
					placeholder="Username"
					aria-label="Username"
				/>
			</div>
			<div className="form-group">
				<label>First Name </label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="first_name"
					placeholder="First Name"
					aria-label="First Name"
				/>
			</div>
			<div className="form-group">
				<label>Last Name </label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="last_name"
					placeholder="Last Name"
					aria-label="Last Name"
				/>
			</div>
			<div className="form-group">
				<label>Email</label>
				<input
					type="text"
					className="form-control mr-3  mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="email"
					placeholder="Email"
					aria-label="Email"
				/>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="password"
					placeholder="Password"
					aria-label="Password"
				/>
			</div>
			<div className="form-group">
				<label>Repeat Password</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="repeat_password"
					placeholder="Repeat Password"
					aria-label="Repeat Password"
				/>
			</div>
			<div className="d-flex justify-content-around">
				<Link to="/signupgarden">
					<button onClick={saveUserInput} type="button" className="btn btn-style my-4">
						Continue
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-style my-4">
						Cancel
					</button>
				</Link>
			</div>
		</form>
	);
};

SignupPersonal.propTypes = {
	history: PropTypes.object
};
