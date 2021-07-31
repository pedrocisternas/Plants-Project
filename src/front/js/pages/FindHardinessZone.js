import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FindHardinessZone = () => {
	const { store, actions } = useContext(Context);
	const [zipCode, setZipCode] = useState(null);
	const [showLabel, setShowLabel] = useState(false);

	const userZipCode = e => {
		setZipCode(e.target.value);
		console.log(e);
	};

	const getHardiness = async zip => {
		console.log("this is user zip: ", zipCode);
		actions.findHardinessZone(zip);
		setShowLabel(true);
		//console.log(store.usersPersonal[0].hardiness_zone);
	};

	const handleFind = zip => {
		//setZipCode("");
		console.log("this is the handleFind() zipcode", zipCode, typeof zipCode);
		setShowLabel(false);
		if (zip) {
			setZipCode("");
		}
	};

	return (
		<div className="container h-100">
			<h1 className="text-center py-3 heading">Find Your Hardiness Zone</h1>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/iG4axMX.png" alt="forecast icon" />
			</p>
			<div className="form-group d-flex flex-column justify-content-center my-4">
				{/* <label className="text-center">Hardiness Zone Search</label> */}
				{showLabel ? (
					<h4 className="heading text-center color-item2 user-info2">
						The hardiness zone for zip code <b>{store.hardinessZone.zipcode}</b> is{" "}
						<b>{store.hardinessZone.hardiness_zone}</b>.
					</h4>
				) : null}
				<div className="text-center my-3">
					<a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noopener noreferrer">
						{" "}
						Read more about US. hardiness zones
					</a>
				</div>
				<input
					type="text"
					className="form-control mr-3 mt-5 mb-2 w-50 m-auto"
					onChange={userZipCode}
					style={{ textAlign: "center" }}
					name="zip"
					placeholder="Enter Your Zip Code"
					value={zipCode}
					aria-label="zip"
				/>
				<div className="d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-style my-4 w-25 align-self-center"
						onClick={() => {
							getHardiness(zipCode);
						}}>
						Find
					</button>
					<button
						type="button"
						className="btn btn-style my-4 w-25 align-self-center"
						onClick={() => {
							handleFind(zipCode);
						}}>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};
