import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SignupGarden = props => {
	const { store, actions } = useContext(Context);
	// const [plotSize, setPlotSize] = useState(null);
	// const [plotWidth, setPlotWidth] = useState(null);
	// const [plotLength, setPlotLength] = useState(null);
	const [userGarden, setUserGarden] = useState({
		zipcode: null,
		hardiness_zone: null,
		plot_width: null,
		plot_length: null,

		experience: null
	});

	const userGardenInput = e => {
		// setPlotSize(parseInt(e.target.value));
		setUserGarden({ ...userGarden, [e.target.name]: e.target.value });
		console.log(e.target.name, e.target.value);
	};

	const saveGardenInput = () => {
		actions.putInfoUser(userGarden);
		// props.showButtons();
	};

	return (
		<form className="container w-50 m-auto">
			<h1 className="text-center heading">Plot Size Information</h1>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/8ratEk4.png" alt="floral design" />
			</p>

			<div className="form-group">
				<label>Plot Width (in m)</label>
				<input
					onChange={userGardenInput}
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_width"
					placeholder="Enter Plot width"
					aria-label="plot_width"
					required
				/>
			</div>
			<div className="form-group">
				<label>Plot Length (in m)</label>
				<input
					onChange={userGardenInput}
					type="text"
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_length"
					placeholder="Enter Plot length"
					aria-label="plot_length"
					required
				/>
			</div>

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
