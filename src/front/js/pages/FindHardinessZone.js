import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FindHardinessZone = () => {
	const { store, actions } = useContext(Context);
	const [zipCode, setZipCode] = useState(null);
	const [showLabel, setShowLabel] = useState(false);
	const [inputZipcode, setInputZipcode] = useState("");

	const userZipCode = e => {
		setZipCode(e.target.value);
	};

	const getHardiness = () => {
		console.log("this is user zip: ", zipCode);
		actions.findHardinessZone(zipCode);
		setShowLabel(true);
		//console.log(store.usersPersonal[0].hardiness_zone);
	};

	const handleFind = () => {
		setZipCode("");
		console.log("this is the handleFind() zipcode", zipCode, typeof zipCode);
		setShowLabel(false);
	};

	return (
		<div className="container h-100">
			<h1 className="text-center py-3 heading">Find Your Hardiness Zone</h1>
			<div className="form-group d-flex flex-column justify-content-center">
				<label className="text-center">Hardiness Zone Search</label>
				<div className="text-center">
					<a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noopener noreferrer">
						{" "}
						Read more about US. hardiness zones
					</a>
				</div>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2 w-50 m-auto"
					onChange={userZipCode}
					style={{ textAlign: "center" }}
					name="zip"
					placeholder="Enter Your Zip Code"
					aria-label="zip"
				/>
				<div className="d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-style my-4 w-25 align-self-center"
						onClick={() => {
							getHardiness();
							//handleFind();
						}}>
						Find
					</button>
					<button
						type="button"
						className="btn btn-style my-4 w-25 align-self-center"
						onClick={() => {
							//getHardiness();
							handleFind();
						}}>
						Clear
					</button>
				</div>
			</div>
			{showLabel ? (
				<h4 className="heading text-center color-item2 user-info2">
					Your hardiness zone is <u>{store.hardinessZone.hardiness_zone}</u>
				</h4>
			) : null}
		</div>
	);
};
