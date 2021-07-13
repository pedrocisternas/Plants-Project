import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Grid } from "../component/grid";

export const HomeUnreg = () => {
	return (
		<>
			<Grid />
			<Link to="/signuppersonal">
				<div className="container d-flex flex-column align-items-center">
					<button type="button" className="btn btn-style btn-list m-3">
						Sign up
					</button>
				</div>
			</Link>
		</>
	);
};
