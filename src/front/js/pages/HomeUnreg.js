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
				<h1 className="text-center py-3 heading mb-1">Welcome to Plotters!</h1>
				<p className="text-center m-0">
					<img src="https://i.imgur.com/tTBj7Rj.png" alt="floral-design" />
				</p>
				<div className="row row-cols-2 text-center">
					<div className="col m-auto">
						<div className="landing-titles text-center d-flex justify-content-center align-items-center mt-5">
							<h2 className="m-0">What is Plotters?</h2>
						</div>
						<p className="landing-text mx-5 mb-5 p-3">
							Whether you are a beginner or an experienced gardener, you can always take advantage of{" "}
							<b className="color-item">Plotters</b> to plan your dream garden! It is easy and fast!
						</p>
					</div>
					<div className="col m-auto ml-5 landing-img">
						<img className="m-auto" src="https://i.imgur.com/4ibgmga.png" alt="flowers" />
					</div>
					<div className="w-50 m-auto">
						<img className="m-auto" src="https://i.imgur.com/KZ6RiAX.png" alt="..." />
					</div>
				</div>
				<div className="row row-cols-2 m-5 text-center">
					<div className="col landing-img mr-5 m-auto">
						<img className="m-auto" src="https://i.imgur.com/zLqI9Ec.png" alt="flowers" />
					</div>
					<div className="col my-3 d-flex flex-column justify-content-center">
						<div className="landing-titles text-center d-flex justify-content-center align-items-center mt-5">
							<h2>How does Plotters work?</h2>
						</div>
						<div className="m-auto">
							<div className="d-flex align-items-center my-1 ml-5 pl-5">
								<span className="landing-numbers mr-3">
									<img src="https://i.imgur.com/NCT1ojK.png" alt="1" />
								</span>
								<p className="landing-text mb-0 p-3">Click on the grid and sign up.</p>
							</div>
							<div className="d-flex align-items-center my-1 ">
								<span className="landing-numbers mr-3">
									<img src="https://i.imgur.com/s58ycCz.png" alt="2" />
								</span>
								<p className="landing-text mb-0 p-3">Tell us about your garden spot.</p>
							</div>
							<div className="d-flex align-items-center my-1 ml-4 pl-3">
								<span className="landing-numbers mr-3">
									<img src="https://i.imgur.com/BueJMz8.png" alt="3" />
								</span>
								<p className="landing-text mb-0 p-3">Create your dream garden.</p>
							</div>
						</div>
					</div>
					<div className="w-50 m-auto">
						<img className="m-auto" src="https://i.imgur.com/KZ6RiAX.png" alt="..." />
					</div>
				</div>
				<h1 className="text-center py-3 heading mb-1">Ready to begin?</h1>
				<h1 className="text-center pb-3 heading mb-1">Start Designing Your Garden</h1>
				<div className="container justify-content-center d-flex flex-row flex-wrap my-2 pt-3">
					{store.hardcodedGarden.map((el, i) => (
						<div className="square zoom-in" style={{ width: width, height: width, margin: margin }} key={i}>
							<Link to="/signuppersonal">
								<img style={{ width: image }} src="https://i.imgur.com/KlyBk8R.png" alt="seedling" />
							</Link>
						</div>
					))}
				</div>
			</>

			<div className="container d-flex flex-column align-items-center w-50">
				<Link to="/signuppersonal" className="w-50">
					<button type="button" className=" w-100 btn btn-style btn-list mx-3 mb-3">
						Sign up
					</button>
				</Link>
			</div>
		</>
	);
};
