import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignupGarden = () => {
	return (
		<form className="container w-50">
			<h1 className="text-center">Sign Up</h1>
			<div className="form-groupn">
				<label className="text-center">Hardiness Zone </label>
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
				<label>Email</label>
				<input
					type="text"
					className="form-control mr-3  mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Email"
					aria-label="Email"
				/>
			</div>
			<div className="form-group">
				<label>Another Question</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Another Q"
					aria-label="another"
				/>
			</div>
			<div className="form-group">
				<label>One more question here</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="One more Q"
					aria-label="one more"
				/>
			</div>

			<Link to={"/"}>
				<button type="button" className="btn btn-success mb-2">
					Submit
				</button>
			</Link>
		</form>
	);
};
