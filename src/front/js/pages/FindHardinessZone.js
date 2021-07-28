import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FindHardinessZone = () => {
	const { store, actions } = useContext(Context);
	const [zipCode, setZipCode] = useState(null);

	const userZipCode = e => {
		setZipCode(e.target.value);
	};

	return (
		<div>
			<h1 className="text-center py-3 heading">Find Your Hardiness Zone</h1>
			<input />
		</div>
	);
};
