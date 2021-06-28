import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlantList = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="text-center py-3 heading">Your Selected Plants List</h1>
			<div className="container ">
				{store.plants.map((el, i) => (
					<div className="" key={i}>
						<div>
							Plant #{i + 1} is {el}.
						</div>
					</div>
				))}
			</div>
		</>
	);
};
