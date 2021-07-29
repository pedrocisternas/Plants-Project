import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SignupGarden = props => {
	const { store, actions } = useContext(Context);
	// const [plotSize, setPlotSize] = useState(null);
	const [plotWidth, setPlotWidth] = useState(null);
	const [plotLength, setPlotLength] = useState(null);
	const [userGarden, setUserGarden] = useState({
		hardiness: null,
		sunlight: null,
		edibles: null,
		annuals: null,
		experience: null
	});

	const userGardenInput = e => {
		// setPlotSize(parseInt(e.target.value));
		setUserGarden({ ...userGarden, [e.target.name]: e.target.value });
		console.log(e.target.name, e.target.value);
	};

	// const theLength = e => {
	// 	setPlotLength(parseInt(e.target.value));
	// 	setUserGarden({ ...userGarden, [e.target.name]: e.target.value });
	// 	actions.setPlotLength(parseInt(e.target.value));
	// };

	// const theWidth = e => {
	// 	setPlotWidth(parseInt(e.target.value));
	// 	setUserGarden({ ...userGarden, [e.target.name]: e.target.value });
	// 	actions.setPlotWidth(parseInt(e.target.value));
	// };

	// const saveGardenInput = () => {
	// 	console.log(userGarden);
	// 	actions.postUserGarden(userGarden);
	// 	actions.emptyGarden();
	// 	for (let i = 0; i < plotSize; i++) {
	// 		actions.addSquare();
	// 	}
	// 	props.showButtons();
	// };

	const saveGardenInput = () => {
		// console.log(userGarden);
		// actions.postUserGarden(userGarden);
		// actions.emptyGarden();
		// for (let i = 0; i < plotLength * plotWidth; i++) {
		// 	actions.addSquare();
		// }
		actions.putInfoUser(userGarden);
		// props.showButtons();
	};

	return (
		<form className="container w-50 m-auto">
			<h1 className="text-center heading">Garden Details</h1>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/8ratEk4.png" alt="floral design" />
			</p>
			<div className="form-group">
				<label className="text-center">Find Your Hardiness Zone</label>
				<a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noopener noreferrer">
					{" "}
					Find more about US. hardiness zones
				</a>
				<input
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					onChange={userGardenInput}
					style={{ textAlign: "center" }}
					name="hardiness"
					placeholder="Enter Your Zip Code"
					aria-label="Zone"
				/>
				<button type="button" className="btn btn-style my-4">
					Find
				</button>
			</div>

			<div className="form-group">
				<label>Plot Width</label>
				<input
					onChange={userGardenInput}
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_width"
					placeholder="Plot width"
					aria-label="plot_width"
				/>
			</div>
			<div className="form-group">
				<label>Plot Length</label>
				<input
					onChange={userGardenInput}
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_length"
					placeholder="Plot length"
					aria-label="plot_length"
				/>
			</div>
			{/* <p>This section is optional</p>
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
			</div> */}
			<div className="d-flex justify-content-around">
				<Link to="/signuppersonal">
					<button type="button" className="btn btn-style my-4">
						Go Back
					</button>
				</Link>
				<Link to="/login">
					<button
						onClick={() => {
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

SignupGarden.propTypes = {
	showButtons: PropTypes.func
};
