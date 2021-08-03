import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonalInfo = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" w-50 d-flexflex-column justify-content-center align-items-center m-auto">
			<h3 className="heading text-center mb-3">Personal Information</h3>
			<p className="text-center m-0">
				<img src="https://i.imgur.com/lnc2fwA.png" alt="pensil and paper" />
			</p>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Name: </h5>
				<div className="color-item2 text-center">
					{store.usersPersonal[0].first_name} {store.usersPersonal[0].last_name}
				</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Username: </h5>
				<div className="color-item2 text-center">{store.usersPersonal[0]["username"]}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Email: </h5>
				<div className="color-item2 text-center">{store.usersPersonal[0]["email"]}</div>
			</div>
			{/* <div className="user-info">
				<h5 className="heading text-center mb-0">Password: </h5>
				<div className="color-item2 text-center">{store.usersPersonal[0]["password"]}</div>
			</div> */}
			<div className="w-25 m-auto">
				<Link to="/profile">
					<button type="button" className="btn btn-style m-auto w-100">
						Go back to Profile
					</button>
				</Link>
			</div>
		</div>
	);
};
