import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Logout = () => {
	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-body d-flex flex-column align-items-center">
					<h1 className="card-title">Logout</h1>
					<p>You are about to log out</p>
					<a href="#" className="btn btn-success mb-2">
						Logout
					</a>
					<Link to="/homeReg">
						<div style={{ color: "gray" }}>Go back to profile</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
