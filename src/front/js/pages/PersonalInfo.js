import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonalInfo = props => {
	const { store, actions } = useContext(Context);
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<div>
			{" "}
			<h3 className="heading">Personal Information</h3>
			<label>Name: </label>
			<div>
				{store.usersPersonal[0]["first_name"]} {store.usersPersonal[0]["last_name"]}
			</div>
			<label>Username: </label>
			<div>{store.usersPersonal[0]["username"]}</div>
			<label>Email: </label>
			<div>{store.usersPersonal[0]["email"]}</div>
			<label>Password: </label>
			<div>{store.usersPersonal[0]["password"]}</div>
		</div>
	);
};
