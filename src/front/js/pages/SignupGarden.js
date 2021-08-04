import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SignupGarden = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const [userGarden, setUserGarden] = useState({
		plot_width: null,
		plot_length: null
	});

	const userGardenInput = e => {
		var val = null;
		if (e.target.value != "") {
			val = e.target.value;
		}
		setUserGarden({ ...userGarden, [e.target.name]: val });
	};

	const saveGardenInput = e => {
		e.preventDefault();
		if (userGarden["plot_width"] && userGarden["plot_length"]) {
			actions.putInfoUser(userGarden);
			history.push("/login");
		} else {
			setError(true);
		}
	};

	return (
		<form className="container w-50 m-auto">
			<h1 className="text-center heading">Plot Size Information</h1>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/8ratEk4.png" alt="floral design" />
			</p>

			<div className="form-group">
				<label>Plot Width (in meters)</label>
				<input
					onChange={userGardenInput}
					type="text"
					required
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_width"
					placeholder="Enter Plot width"
					aria-label="plot_width"
				/>
			</div>
			<div className="form-group">
				<label>Plot Length (in meters)</label>
				<input
					onChange={userGardenInput}
					type="text"
					required
					className="form-control mr-3 mt-2 mb-2"
					style={{ textAlign: "center" }}
					name="plot_length"
					placeholder="Enter Plot length"
					aria-label="plot_length"
				/>
			</div>
			{error ? (
				<h4 className="d-flex justify-content-around color-item2">Please fill all the input fields!</h4>
			) : null}
			<div className="d-flex justify-content-around">
				<Link to="/signuppersonal">
					<button type="button" className="btn btn-style my-4">
						Go Back
					</button>
				</Link>
				{/* <Link to="/login"> */}
				<button onClick={saveGardenInput} type="button" className="btn btn-style my-4">
					Submit
				</button>
				{/* </Link> */}
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
