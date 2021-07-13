import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	return (
		<div className="container w-50 h-100 ">
			<div className="card card-style text-center border-0">
				<div className="card-body d-flex flex-column align-items-center ">
					<h1 className="card-title heading">Welcome back!</h1>
					<p>
						<img src="https://i.imgur.com/FCpAaaE.png" alt="floral design" />
					</p>
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
					<a href="#" className="btn btn-style mb-2">
						Submit
					</a>
					<Link to="/signuppersonal">
						<div className="color-item mt-3">Create Account</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
