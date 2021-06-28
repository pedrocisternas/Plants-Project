import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddPlant = () => {
	return (
		<div className="container">
			<h1 className="text-center py-3 heading">Search for a Plant</h1>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Type plant name"
					aria-label="Type plant name"
					aria-describedby="button-addon2"
				/>
				<div className="input-group-append">
					<button className="btn btn-style" type="button" id="button-addon2">
						Search
					</button>
				</div>
			</div>
			<Link to="/">
				<button type="button" className="btn btn-style my-4">
					Go Back
				</button>
			</Link>
		</div>
	);
};
