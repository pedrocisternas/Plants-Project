import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Grid } from "../component/grid";

export const LandingPage = () => {
	return (
		<>
			<h1 className="text-center">Screenshots and explanations.</h1>
			<div className="d-flex justify-content-around">
				<Link to="/homeunreg">
					<button type="button" className="btn btn-style my-4">
						Skip
					</button>
				</Link>
				<Link to="/signuppersonal">
					<button type="button" className="btn btn-style my-4">
						Sign Up
					</button>
				</Link>
			</div>
		</>
	);
};
