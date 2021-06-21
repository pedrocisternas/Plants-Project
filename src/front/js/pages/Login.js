import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-body d-flex flex-column align-items-center">
					<h1 className="card-title">Login</h1>
					<input
						type="text"
						className="form-control mr-3 ml-3 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Username"
						aria-label="Username"
					/>
					<input
						type="text"
						className="form-control mr-6 ml-6 mt-2 mb-2"
						style={{ textAlign: "center" }}
						placeholder="Password"
						aria-label="Password"
					/>
					<a href="#" className="btn btn-success mb-2">
						Submit
					</a>
					<Link to="/">
						<div style={{ color: "gray" }}>Create Account</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
