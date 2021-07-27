import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const GardenInfo = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" w-50 m-auto ">
			<h3 className="heading text-center">Garden Information</h3>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Hardiness Zone: </h5>
				<div className="color-item2 text-center">{store.usersGarden[0].hardiness}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Plot Width: </h5>
				<div className="color-item2 text-center">{store.usersPersonal[0]["grid_width"]}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Plot Length: </h5>
				<div className="color-item2 text-center">{store.usersPersonal[0]["grid_length"]}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Sunlight: </h5>
				<div className="color-item2 text-center">{store.usersGarden[0]["sunlight"]}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Edible plants included: </h5>
				<div className="color-item2 text-center">{store.usersGarden[0]["edibles"]}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Annual plants included: </h5>
				<div className="color-item2 text-center">{store.usersGarden[0]["annuals"]}</div>
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Trees included: </h5>
				<div className="color-item2 text-center">{store.usersGarden[0]["trees"]}</div>
			</div>
			<div className="w-25 m-auto">
				<Link to="/profile">
					<button type="button" className="btn btn-style m-auto w-100">
						Go back to Profile
					</button>
				</Link>
			</div>
		</div>
	);
};
