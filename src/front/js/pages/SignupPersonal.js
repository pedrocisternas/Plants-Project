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

	// const [validations, setValidations] = useState({
	// 	username: true,
	// 	first_name: true,
	// 	last_name: true,
	// 	email: true,
	// 	password: true
	// });

	const userInput = e => {
		var val = null;
		if (e.target.value != "") {
			val = e.target.value;
		}
		setUserPersonal({ ...userPersonal, [e.target.name]: val });
	};

	// const validationUsername = () => {
	// 	if (userPersonal["username"] != null) {
	// 		setValidations({ ...validations, username: true });
	// 		console.log("hola");
	// 	} else {
	// 		setValidations({ ...validations, username: false });
	// 		console.log("chao");
	// 	}
	// };

	// const validationFirstName = () => {
	// 	if (userPersonal["first_name"] != null) {
	// 		setValidations({ ...validations, first_name: true });
	// 	} else {
	// 		setValidations({ ...validations, first_name: false });
	// 	}
	// };

	// const validationLastName = () => {
	// 	if (userPersonal["last_name"] != null) {
	// 		setValidations({ ...validations, last_name: true });
	// 	} else {
	// 		setValidations({ ...validations, last_name: false });
	// 	}
	// };

	// const validationEmail = () => {
	// 	if (userPersonal["email"] != null) {
	// 		setValidations({ ...validations, email: true });
	// 	} else {
	// 		setValidations({ ...validations, email: false });
	// 	}
	// };

	// const validationPassword = () => {
	// 	if (userPersonal["password"] != null) {
	// 		setValidations({ ...validations, password: true });
	// 	} else {
	// 		setValidations({ ...validations, password: false });
	// 	}
	// };

	// const finalValidation = () => {
	// 	if (
	// 		validations["username"] &&
	// 		validations["first_name"] &&
	// 		validations["last_name"] &&
	// 		validations["email"] &&
	// 		validations["password"]
	// 	) {
	// 		console.log("paso");
	// 		actions.postNewUser(userPersonal);
	// 	} else {
	// 		console.log("no se entrega");
	// 		setError(true);
	// 	}
	// };

	const saveUserInput = e => {
		e.preventDefault();
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
		// var validatedUsername = true;
		// var validatedFirstName = true;
		// var validatedLastName = true;
		// var validatedEmail = true;
		// var validatedPassword = true;
		// if (userPersonal["username"] == null) {
		// 	validatedUsername = false;
		// }
		// if (userPersonal["first_name"] == null) {
		// 	validatedFirstName = false;
		// }
		// if (userPersonal["last_name"] == null) {
		// 	validatedLastName = false;
		// }
		// if (userPersonal["email"] == null) {
		// 	validatedEmail = false;
		// }
		// if (userPersonal["password"] == null) {
		// 	validatedPassword = false;
		// }
		// setValidations({
		// 	username: validatedUsername,
		// 	first_name: validatedFirstName,
		// 	last_name: validatedLastName,
		// 	email: validatedEmail,
		// 	password: validatedPassword
		// });
		// validationUsername();
		// validationFirstName();
		// validationLastName();
		// validationEmail();
		// validationPassword();
		// cambiar userPersonal por validations
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
			{error ? (
				<h4 className="d-flex justify-content-around color-item2">Please fill all the input fields!</h4>
			) : null}
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
