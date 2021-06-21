import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignupPersonal = () => {
	return (
		<form className="container w-50 my-5">
			<h1 className="text-center">Personal Info</h1>
			<div className="form-groupn">
				<label className="text-center">Username </label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Username"
					aria-label="Username"
				/>
			</div>
			<div className="form-group">
				<label>First Name </label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="First Name"
					aria-label="First Name"
				/>
			</div>
			<div className="form-group">
				<label>Last Name </label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Last Name"
					aria-label="Last Name"
				/>
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
				<label>Password</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Password"
					aria-label="Password"
				/>
			</div>
			<div className="form-group">
				<label>Repeat Password</label>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					placeholder="Repeat Password"
					aria-label="Repeat Password"
				/>
			</div>
			<div className="d-flex justify-content-around">
				<Link to="/signupgarden">
					<button type="button" className="btn btn-success ml-3">
						Continue
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-success ml-3">
						Cancel
					</button>
				</Link>
			</div>
		</form>
	);
};
