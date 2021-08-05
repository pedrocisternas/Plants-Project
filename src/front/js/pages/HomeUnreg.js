import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Grid } from "../component/grid";

export const HomeUnreg = () => {
	const { store, actions } = useContext(Context);
	const number = 72 / 9;
	const width = 0.9 * number + "vw";
	const margin = 0.1 * number + "vw";
	const image = 0.4 * number + "vw";

	return (
		<>
			{/* <Grid /> */}

			<>
				<h1 className="text-center py-3 heading mb-1">Start Designing Your Garden</h1>
				<p className="text-center m-0">
					<img src="https://i.imgur.com/tTBj7Rj.png" alt="floral-design" />
				</p>
				<div className="row">
					<div className="col-7">
						<div className="landing-titles text-center d-flex justify-content-center align-items-center mt-5">
							<h2 className="m-0">What is Plotters?</h2>
						</div>
						<p className="landing-text mx-5 mb-5 p-3">
							Whether you are a beginner or an experienced gardener, you can always use{" "}
							<b className="color-item">Plotters</b> to plan your dream garden! It is easy and fast!
						</p>
					</div>
					<div className="col-5 mt-5">Img HERE</div>
				</div>
				<div className="row">
					<div className="col-5">Img HERE</div>
					<div className="col-7">
						<div className="landing-titles text-center d-flex justify-content-center align-items-center mt-5">
							<h2>How does Plotters work?</h2>
						</div>
						<span className="landing-numbers">1.</span>
						<p className="landing-text mx-5 mb-5 p-3">Sign up quickly</p>
						<span className="landing-numbers">2.</span>
						<p className="landing-text mx-5 mb-5 p-3">Enter a few details about your spot</p>
						<span className="landing-numbers">3.</span>
						<p className="landing-text mx-5 mb-5 p-3">Explore plant choices and create your garden.</p>
					</div>
				</div>
				<div className="container justify-content-center d-flex flex-row flex-wrap my-2 py-5">
					{store.hardcodedGarden.map((el, i) => (
						<div className="square zoom-in" style={{ width: width, height: width, margin: margin }} key={i}>
							<Link to="/signuppersonal">
								<img style={{ width: image }} src="https://i.imgur.com/KlyBk8R.png" alt="seedling" />
							</Link>
						</div>
					))}
				</div>
			</>

			<div className="container d-flex flex-column align-items-center">
				<Link to="/signuppersonal">
					<button type="button" className="btn btn-style btn-list m-3">
						Sign up
					</button>
				</Link>
			</div>
		</>
	);
};
