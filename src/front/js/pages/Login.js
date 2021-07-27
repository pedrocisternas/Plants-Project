import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const [userLog, setUserLog] = useState({
		username: null,
		password: null
	});

	const handleUserLog = e => {
		setUserLog({ ...userLog, [e.target.name]: e.target.value });
	};

	const logIn = () => {
		// actions.userLogin(userLog);
		actions.getUser(userLog);
		props.showButtons();
	};

	return (
		<div className="container w-50 h-100 ">
			<div className="card card-style text-center border-0">
				<div className="card-body d-flex flex-column align-items-center ">
					<h1 className="card-title heading">Welcome back!</h1>
					<p>
						<img src="https://i.imgur.com/FCpAaaE.png" alt="floral design" />
					</p>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						onChange={handleUserLog}
						style={{ textAlign: "center" }}
						name="username"
						placeholder="Username"
						aria-label="Username"
					/>
					<input
						type="text"
						className="form-control mr-6 ml-6 mt-2 mb-2"
						onChange={handleUserLog}
						style={{ textAlign: "center" }}
						name="password"
						placeholder="Password"
						aria-label="Password"
					/>
					<Link to="/homeReg">
						<button
							onClick={() => {
								actions.getUser(userLog);
								props.showButtons();
							}}
							className="btn btn-style mb-2"
							type="button">
							Submit
						</button>
					</Link>
					<Link to="/signuppersonal">
						<div className="color-item mt-3">Create Account</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	showButtons: PropTypes.func
};
