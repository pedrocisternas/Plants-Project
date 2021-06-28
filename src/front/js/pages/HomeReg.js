import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Grid } from "../component/grid";

export const HomeReg = () => {
	return (
		<>
			<Grid />
			<div className="container d-flex flex-column align-items-center">
				<button type="button" className="btn btn-success btn-block mb-3 w-25">
					Save Your Selection
				</button>
				<div>
					<Link to="/plantlist">
						<button type="button" className="btn btn-outline-success m-3">
							Generate List
						</button>
					</Link>
					<button type="button" className="btn btn-outline-success m-3">
						Show Calendar
					</button>
				</div>
			</div>
		</>
	);
};
