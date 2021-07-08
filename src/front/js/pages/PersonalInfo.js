import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonalInfo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<span>{store.users[0]["first_name"]}: User Profile</span>
		</div>
	);
};
