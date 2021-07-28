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
				<h1 className="text-center py-3 heading">Start Designing Your Garden</h1>
				<div className="container justify-content-center d-flex flex-row flex-wrap my-2 py-5">
					{store.hardcodedGarden.map((el, i) => (
						<div className="square zoom-in" style={{ width: width, height: width, margin: margin }} key={i}>
							<Link to="/signuppersonal">
								<img style={{ width: image }} src="https://i.imgur.com/KlyBk8R.png" alt="seedling" />
							</Link>
						</div>
					))}
					{/* {isOpen && (
						<Popup
							plant={store.plantLibrary.find(
								element => element["commonName"] == store.garden[store.squareSelected]["name"]
							)}
							// plantName={store.garden[store.squareSelected]["name"]}
							// plantDescription={store.garden[store.squareSelected].description}
							handlePopup={() => setIsOpen(!isOpen)}
						/>
					)} */}
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
