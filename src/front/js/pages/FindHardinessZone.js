import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FindHardinessZone = () => {
	const { store, actions } = useContext(Context);
	const [zipCode, setZipCode] = useState(null);
	const [showLabel, setShowLabel] = useState(false);

	const userZipCode = e => {
		setZipCode(e.target.value);
	};

	const getHardiness = () => {
		console.log("this is user zip: ", zipCode);
		actions.findHardinessZone(zipCode);
		setShowLabel(true);
		//console.log(store.usersPersonal[0].hardiness_zone);
	};

	return (
		<div>
			<h1 className="text-center py-3 heading">Find Your Hardiness Zone</h1>
			<div className="form-group">
				<label className="text-center">Hardiness Zone Search</label>
				<a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noopener noreferrer">
					{" "}
					Read more about US. hardiness zones
				</a>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userZipCode}
					style={{ textAlign: "center" }}
					name="zip"
					placeholder="Enter Your Zip Code"
					aria-label="zip"
				/>
				<button type="button" className="btn btn-style my-4" onClick={getHardiness}>
					Find
				</button>
			</div>
			{showLabel ? <div>Your hardiness zone is {store.hardinessZone.hardiness}</div> : null}
		</div>
	);
};
