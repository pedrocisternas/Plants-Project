import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignupGarden = () => {
	return (
		<form className="container w-50 my-5 grid-bg">
			<h1 className="text-center heading mb-5">Garden Details</h1>
			<div className="form-groupn">
				<label className="text-center">Hardiness Zone</label>
				<a href="https://gilmour.com/planting-zones-hardiness-map" target="_blank" rel="noopener noreferrer">
					{" "}
					Need help? Find Your Zone
				</a>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Hardiness Zone"
					aria-label="Zone"
				/>
			</div>
			<div className="form-group">
				<label>Plot Size</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Plot size"
					aria-label="size"
				/>
			</div>
			<div className="form-group">
				<label>Sun/Shade</label>
				<select className="form-control" id="sunshine">
					<option selected>Choose...</option>
					<option>Sunny</option>
					<option>Shady</option>
					<option>Semi-sun</option>
				</select>
			</div>
			<div className="form-group">
				<label>Edible Plants</label>
				<select className="form-control" id="sunshine">
					<option selected>Do you want to include edible plants?</option>
					<option>Yes</option>
					<option>No</option>
					<option>Undecided</option>
				</select>
			</div>
			<div className="form-group">
				<label>Annual Plants</label>
				<select className="form-control" id="sunshine">
					<option selected>Do you want to include annual plants?</option>
					<option>Yes</option>
					<option>No</option>
					<option>Undecided</option>
				</select>
			</div>
			<div className="form-group">
				<label>One more question here</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-4"
					style={{ textAlign: "center" }}
					placeholder="One more Q"
					aria-label="one more"
				/>
			</div>
			<div className="d-flex justify-content-around">
				<Link to="/signuppersonal">
					<button type="button" className="btn btn-success my-4">
						Go Back
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-success my-4">
						Submit
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-success my-4">
						Cancel
					</button>
				</Link>
			</div>
		</form>
	);
};
