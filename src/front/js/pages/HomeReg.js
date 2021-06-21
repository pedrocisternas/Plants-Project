import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Grid } from "../component/grid";

export const HomeReg = () => {
	return (
		<>
			<Grid />
			<div className="container d-flex flex-column align-items-center">
				<button type="button" className="btn btn-success btn-block m-3 w-25">
					Save Grid
				</button>
				<div>
					<button type="button" className="btn btn-outline-success m-3">
						Generate List
					</button>
					<button type="button" className="btn btn-outline-success m-3">
						Generate Calendar
					</button>
				</div>
			</div>
		</>
	);
};
