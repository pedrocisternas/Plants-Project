import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignupGarden = () => {
	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-body d-flex flex-column align-items-center">
					<h1 className="card-title">Sign Up</h1>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Location"
						aria-label="Location"
					/>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Garden size"
						aria-label="Garden size"
					/>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Last Name"
						aria-label="Last Name"
					/>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Password"
						aria-label="Password"
					/>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Repeat Password"
						aria-label="Repeat Password"
					/>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Email"
						aria-label="Email"
					/>
					<Link to={"/"}>
						<button type="button" className="btn btn-success mb-2">
							Submit
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
