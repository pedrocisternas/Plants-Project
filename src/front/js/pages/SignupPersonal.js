import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SignupPersonal = props => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	let history = useHistory();
	const [userPersonal, setUserPersonal] = useState({
		username: null,
		first_name: null,
		last_name: null,
		email: null,
		password: null
	});

	const [validations, setValidations] = useState({
		username: true,
		first_name: true,
		last_name: true,
		email: true,
		password: false
	});

	const userInput = e => {
		var val = null;
		if (e.target.value != "") {
			val = e.target.value;
		}
		setUserPersonal({ ...userPersonal, [e.target.name]: val });
	};

	const validationUsername = () => {
		if (userPersonal["username"] != null) {
			setValidations({ ...validations, username: true });
			console.log("hola");
		} else {
			setValidations({ ...validations, username: false });
			console.log("chao");
		}
	};

	const validationFirstName = () => {
		if (userPersonal["first_name"] != null) {
			setValidations({ ...validations, first_name: true });
		} else {
			setValidations({ ...validations, first_name: false });
		}
	};

	const validationLastName = () => {
		if (userPersonal["last_name"] != null) {
			setValidations({ ...validations, last_name: true });
		} else {
			setValidations({ ...validations, last_name: false });
		}
	};

	const validationEmail = () => {
		if (userPersonal["email"] != null) {
			setValidations({ ...validations, email: true });
		} else {
			setValidations({ ...validations, email: false });
		}
	};

	const validationPassword = () => {
		if (userPersonal["password"] != null) {
			setValidations({ ...validations, password: true });
		} else {
			setValidations({ ...validations, password: false });
		}
	};

	const saveUserInput = e => {
		e.preventDefault();
		validationUsername();
		validationFirstName();
		// validationLastName();
		// validationEmail();
		validationPassword();
		// cambiar userPersonal por Validation
		if (
			userPersonal["username"] &&
			userPersonal["first_name"] &&
			userPersonal["last_name"] &&
			userPersonal["email"] &&
			userPersonal["password"]
		) {
			actions.postNewUser(userPersonal);
			history.push("/SignupGarden");
		} else {
			setError(true);
		}
	};

	return (
		<form className="container w-50 m-auto needs-validation" noValidate>
			<h1 className="text-center heading ">Personal Information</h1>
			<p className="text-center m-0">
				<img src="https://i.imgur.com/2vaTvrN.png" alt="floral design" />
			</p>
			<div className="form-group">
				<label>Username</label>
				<input
					type="text"
					required
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
					required
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
					required
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
					required
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
					required
					className="form-control mr-3 mt-2 mb-2"
					onChange={userInput}
					style={{ textAlign: "center" }}
					name="repeat_password"
					placeholder="Repeat Password"
					aria-label="Repeat Password"
				/>
			</div>
			{error ? <div className="d-flex justify-content-around">ERROR</div> : null}
			<div className="d-flex justify-content-around">
				{/* <Link to="/SignupGarden"> */}
				<button onClick={saveUserInput} type="button submit" className="btn btn-style my-4">
					Next
				</button>
				{/* </Link> */}
				<Link to="/">
					<button type="button submit" className="btn btn-style my-4">
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
