import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Logout = props => {
	const { store, actions } = useContext(Context);

	const logOut = () => {
		actions.userLogout();
		props.showButtons();
	};

	return (
		<div className="container h-100 ">
			<div className="card card-style text-center border-0">
				<div className="card-body d-flex flex-column align-items-center">
					<h1 className="card-title heading">See you soon, {store.usersPersonal[0].username}!</h1>
					<p>
						<img src="https://i.imgur.com/XC46xXX.png" alt="floral design" />
					</p>
					<Link to="/">
						<button onClick={logOut} className="btn btn-style mb-2">
							Log Out
						</button>
					</Link>
					<Link to="/profile">
						<div className="color-item mt-3">Go to profile</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

Logout.propTypes = {
	showButtons: PropTypes.func
};
