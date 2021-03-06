import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Popup } from "./popup";

export const Grid = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const helper = i => {
		setIsOpen(!isOpen);
		actions.updateSquareSelected(i);
	};

	const number = 72 / parseInt(store.usersPersonal[0]["grid_width"] + 1);
	const width = 0.9 * number + "vw";
	const margin = 0.1 * number + "vw";
	const image = 0.4 * number + "vw";

	return (
		<>
			<h1 className="text-center py-3 heading">Design Your Garden</h1>
			<div className="container justify-content-center d-flex flex-row flex-wrap my-2 py-5">
				{store.garden.map((el, i) =>
					el && el.plantName != " " ? (
						<div
							className="square-selected"
							style={{ width: width, height: width, margin: margin }}
							key={i}
							onClick={() => helper(i)}>
							<img style={{ width: image }} src="https://i.imgur.com/DUvsZAH.png" alt="color seedling" />
						</div>
					) : store.usersPersonal[0].username != null ? (
						<div className="square zoom-in" style={{ width: width, height: width, margin: margin }} key={i}>
							<Link onClick={() => actions.updateSquareSelected(i)} to="/addplant">
								<img
									style={{ width: image }}
									src="https://i.imgur.com/CJTivse.png"
									alt="green seedling"
								/>
							</Link>
						</div>
					) : (
						<div className="square zoom-in" style={{ width: width, height: width, margin: margin }} key={i}>
							<Link to="/signuppersonal">
								<img style={{ width: image }} src="https://i.imgur.com/KlyBk8R.png" alt="seedling" />
							</Link>
						</div>
					)
				)}
				{isOpen && (
					<Popup
						plant={store.plantLibrary.find(
							element => element["commonName"] == store.garden[store.squareSelected]["name"]
						)}
						// plantName={store.garden[store.squareSelected]["name"]}
						// plantDescription={store.garden[store.squareSelected].description}
						handlePopup={() => setIsOpen(!isOpen)}
					/>
				)}
			</div>
		</>
	);
};
