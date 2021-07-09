import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonalInfo = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" w-50 m-auto ">
			<h3 className="heading text-center">Personal Information</h3>
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
			<div className="user-info">
				<h5 className="heading text-center mb-0">Password: </h5>
				<div className="color-item2 text-center">{store.usersPersonal[0]["password"]}</div>
			</div>
		</div>
	);
};
