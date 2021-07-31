import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const GardenInfo = props => {
	const { store, actions } = useContext(Context);
	const [gardenInfo, setGardenInfo] = useState({
		hardiness_zone: store.usersPersonal[0].hardiness_zone,
		zipcode: store.usersPersonal[0]["zipcode"],
		grid_width: store.usersPersonal[0]["grid_width"],
		grid_length: store.usersPersonal[0]["grid_length"],
		experience: store.usersPersonal[0]["experience"]
	});

	return (
		<div className=" w-50 m-auto ">
			<h3 className="heading text-center">Garden Information</h3>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Hardiness Zone: </h5>
				<input
					placeholder={
						store.usersPersonal[0].hardiness_zone
							? store.usersPersonal[0].hardiness_zone
							: "Add Hardiness Zone"
					}
					aria-label="hardiness_zone"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0].hardiness_zone}</div> */}
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Plot Width: </h5>
				<input placeholder={store.usersPersonal[0]["grid_width"]} aria-label="grid_width" type="text" />
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["grid_width"]}</div> */}
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Plot Length: </h5>
				<input placeholder={store.usersPersonal[0]["grid_length"]} aria-label="grid_length" type="text" />
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["grid_length"]}</div> */}
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Zipcode: </h5>
				<input
					placeholder={store.usersPersonal[0].zipcode ? store.usersPersonal[0].zipcode : "Enter Your Zipcode"}
					aria-label="zipcode"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["zipcode"]}</div> */}
			</div>
			<div className="user-info">
				<h5 className="heading text-center mb-0">Level of Experience: </h5>
				<input
					className="color-item2 text-center"
					placeholder={
						store.usersPersonal[0].experience ? store.usersPersonal[0].experience : "Garden Experience"
					}
				/>
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
