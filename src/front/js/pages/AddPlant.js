import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddPlant = () => {
	const { store, actions } = useContext(Context);
	const [plantName, setPlantName] = useState(null);

	const [newPlant, setNewPlant] = useState("");
	const plantInput = e => {
		setNewPlant(e.target.value);
	};

	return (
		<div className="container">
			<h1 className="text-center py-3 heading">Search for a Plant</h1>
			<div className="input-group mb-3">
				<input
					onChange={e => {
						setPlantName(e.target.value);
					}}
					type="text"
					className="form-control"
					onChange={plantInput}
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
			<div className="d-flex flex-row justtify-content-start align-items-center">
				<div>
<<<<<<< HEAD
					<button
						onClick={() => actions.addAPlant(plantName, store.squareSelected)}
						className="btn btn-style"
						type="button">
=======
					<button onClick={() => actions.addAPlant(newPlant)} className="btn btn-style" type="button">
>>>>>>> 0151d44fec7fc6436f5cf6920e687fa6c30647cc
						Add Plant
					</button>
				</div>
				<Link to="/plantlist">
					<button type="button" className="btn btn-style btn-list m-3">
						See Selected
					</button>
				</Link>
				<Link to="/homeReg">
					<button type="button" className="btn btn-style mx-4">
						Go Back
					</button>
				</Link>
			</div>
		</div>
	);
};
