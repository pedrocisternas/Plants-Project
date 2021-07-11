import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignupGarden = () => {
	const { store, actions } = useContext(Context);
	const [plotSize, setPlotSize] = useState(null);
	const [userGarden, setUserGarden] = useState({
		hardiness: null,
		plot_size: null,
		sunlight: null,
		edibles: null,
		annuals: null,
		experience: null
	});

	const userGardenInput = e => {
		setPlotSize(parseInt(e.target.value));
		setUserGarden({ ...userGarden, [e.target.name]: e.target.value });
		console.log(e.target.name, e.target.value);
	};

	const saveGardenInput = () => {
		console.log(userGarden);
		actions.postUserGarden(userGarden);
		actions.emptyGarden();
		for (let i = 0; i < plotSize; i++) {
			actions.addSquare();
		}
	};

	// const handleSave = () => {
	// 	actions.emptyGarden();
	// 	for (let i = 0; i < plotSize; i++) {
	// 		actions.addSquare();
	// 	}
	// };

	return (
		<form className="container w-50 my-2 grid-bg">
			<h1 className="text-center heading mb-5">Garden Details</h1>
			<div className="form-group">
				<label className="text-center">Hardiness Zone</label>
				<a href="https://gilmour.com/planting-zones-hardiness-map" target="_blank" rel="noopener noreferrer">
					{" "}
					Need help? Find Your Zone
				</a>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userGardenInput}
					style={{ textAlign: "center" }}
					name="hardiness"
					placeholder="Hardiness Zone"
					aria-label="Zone"
				/>
			</div>
			<div className="form-group">
				<label>Plot Size</label>
				<input
					onChange={userGardenInput}
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_size"
					placeholder="Plot size"
					aria-label="plot_size"
				/>
			</div>
			<div className="form-group">
				<label>Sun/Shade</label>
				<select className="form-control" id="sunlight" name="sunlight" onChange={userGardenInput}>
					<option selected>Choose...</option>
					<option>Sunny</option>
					<option>Shady</option>
					<option>Semi-sun</option>
				</select>
			</div>
			<div className="form-group">
				<label>Edible Plants</label>
				<select className="form-control" id="edibles" name="edibles" onChange={userGardenInput}>
					<option selected>Do you want to include edible plants?</option>
					<option>Yes</option>
					<option>No</option>
					<option>Undecided</option>
				</select>
			</div>
			<div className="form-group">
				<label>Annual Plants</label>
				<select className="form-control" id="annuals" name="annuals" onChange={userGardenInput}>
					<option selected>Do you want to include annual plants?</option>
					<option>Yes</option>
					<option>No</option>
					<option>Undecided</option>
				</select>
			</div>
			<div className="form-group">
				<label>Trees</label>
				<select className="form-control" id="trees" name="trees" onChange={userGardenInput}>
					<option selected>Do you want to include trees?</option>
					<option>Yes</option>
					<option>No</option>
					<option>Undecided</option>
				</select>
			</div>
			<div className="d-flex justify-content-around">
				<Link to="/signuppersonal">
					<button type="button" className="btn btn-style my-4">
						Go Back
					</button>
				</Link>
				<Link to="/homeReg">
					<button
						onClick={() => {
							// handleSave();
							saveGardenInput();
						}}
						type="button"
						className="btn btn-style my-4">
						Submit
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-style my-4">
						Cancel
					</button>
				</Link>
			</div>
		</form>
	);
};
