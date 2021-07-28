import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Grid } from "../component/grid";

export const HomeReg = () => {
	return (
		<>
			<Grid />
			<div className="container d-flex flex-column align-items-center">
				<div>
					<Link to="/plantlist">
						<button type="button" className="btn btn-style btn-list m-3">
							Show Selections
						</button>
					</Link>
					{/* <button type="button" className="btn btn-style btn-list m-3">
						Show Calendar
					</button> */}
				</div>
			</div>
		</>
	);
};
