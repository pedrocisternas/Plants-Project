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

	return (
		<>
			<h1 className="text-center py-3 heading">Start Designing Your Garden</h1>
			<div className="container justify-content-center d-flex flex-row flex-wrap my-2 py-5">
				{store.garden.map(
					(el, i) =>
						el ? (
							<div className="square-selected" key={i} onClick={() => helper(i)}>
								<img src="https://i.imgur.com/0fftZmM.png" alt="seedling" />
							</div>
						) : store.usersPersonal[0].username != null ? (
							<div className="square zoom-in" key={i}>
								<Link onClick={() => actions.updateSquareSelected(i)} to="/addplant">
									<img src="https://i.imgur.com/KlyBk8R.png" alt="seedling" />
								</Link>
							</div>
						) : (
							<div className="square zoom-in" key={i}>
								<Link to="/signuppersonal">
									<img src="https://i.imgur.com/KlyBk8R.png" alt="seedling" />
								</Link>
							</div>
						)
				)}
				{isOpen && (
					<Popup
						plantName={store.garden[store.squareSelected].plantName}
						plantDescription={store.garden[store.squareSelected].description}
						handlePopup={() => setIsOpen(!isOpen)}
					/>
				)}
			</div>
		</>
	);
};
