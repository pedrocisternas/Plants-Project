import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Grid = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="text-center py-3 heading">Start Designing Your Garden</h1>
			<div className="container justify-content-center d-flex flex-row flex-wrap my-2 py-5 grid-bg">
				{store.garden.map((el, i) => (
					<div className="square zoom-in" key={i}>
						<Link onClick={() => actions.updateSquareSelected(i)} to="/addplant">
							<i className="fas fa-seedling color-item" />
						</Link>
					</div>
				))}
			</div>
		</>
	);
};
