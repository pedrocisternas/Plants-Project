import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Login = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [passwordShown, setPasswordShown] = useState(false);
	const [userLog, setUserLog] = useState({
		username: null,
		password: null
	});

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleUserLog = e => {
		setUserLog({ ...userLog, [e.target.name]: e.target.value });
	};

	const logIn = () => {
		// actions.getUser(userLog);
		fetch(store.apiAddress + "api/user/" + userLog.username)
			.then(function(response) {
				console.log(response);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				actions.getLoginUserData(responseAsJson);
				props.showButtons();
				history.push("/homeReg");
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	};

	return (
		<div className="container w-50 h-100 ">
			<div className="card card-style text-center border-0">
				<div className="card-body d-flex flex-column align-items-center">
					<h1 className="card-title heading mr-5">Welcome back!</h1>
					<p className="mr-5">
						<img src="https://i.imgur.com/FCpAaaE.png" alt="floral design" />
					</p>
					<div className="input-icons d-flex justify-content-between w-100">
						<div className="w-100">
							<input
								type="text"
								className="form-control m-0 p-0 w-100"
								onChange={handleUserLog}
								style={{ textAlign: "center" }}
								name="username"
								placeholder="Username"
								aria-label="Username"
							/>
						</div>
						<div className="ml-3" style={{ width: "18px" }}></div>
					</div>
					<div className="input-icons d-flex justify-content-between w-100 align-items-center mt-3">
						<div className="w-100">
							<input
								type={passwordShown ? "text" : "password"}
								className="form-control m-0 p-0 w-100"
								onChange={handleUserLog}
								style={{ textAlign: "center" }}
								name="password"
								placeholder="Password"
								aria-label="Password"
							/>
						</div>
						<span>
							{passwordShown ? (
								<i className="far fa-eye ml-3 align-self-center" onClick={togglePasswordVisiblity}></i>
							) : (
								<i
									className="far fa-eye-slash ml-3 align-self-center"
									onClick={togglePasswordVisiblity}></i>
							)}
						</span>
					</div>
					{/* <Link to="/homeReg"> */}
					<button
						onClick={() => {
							logIn();
						}}
						className="btn btn-style mr-5 mb-2"
						type="button">
						Submit
					</button>
					{/* </Link> */}
					<Link to="/signuppersonal">
						<div className="color-item mt-3 mr-5">Create Account</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	showButtons: PropTypes.func
};
