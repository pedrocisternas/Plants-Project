import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlantList } from "../pages/PlantList";
import { Context } from "../store/appContext";

export const popupSearch = props => {
	const { store, actions } = useContext(Context);
	console.log("POPUP_SEARCH", props.plant);
	// const helper = () => {
	// 	props.handlePopup();
	// 	// actions.deletePlant({
	// 	// 	grid_location: store.squareSelected,
	// 	// 	user_id: store.usersPersonal[0]["id"]
	// 	// });
	// };

	return (
		<>
			<div className="popup-container">
				<div className="popup-content">
					<div className="d-flex">
						<div>
							<p>{props.message}</p>
							<div className="d-flex">
								{/* <h2 className="color-item mr-3">{props.plant["commonName"]} ({props.plant["scientificName"]})</h2> */}
								{/* <i className="fab fa-2x fa-pagelines color-item" /> */}
								<span>
									<img src="https://i.imgur.com/7KnWoOT.png" alt="plant" />
								</span>
							</div>
							{/* <p className="color-item">Growth Cycle: {props.plant["growthCycle"]}</p>
							<p className="color-item">Plant type: {props.plant["plantType"]}</p>
							<p className="color-item">Leaf shape: {props.plant["leafType"]}</p>
							<p className="color-item">Height: up to {props.plant["height"]} feet</p>
							<p>{props.plant["comments"]}</p> */}
						</div>
						{/* <div onClick={props.handlePopup}>
							<i className="far fa-2x fa-times-circle color-item2" />
						</div> */}
					</div>
					<div className="text-center">
						{/* <button onClick={() => helper()} className="btn btn-style btn-list">
							Delete
						</button> */}
						{/* <Link to="/addplant">
							<button className="btn btn-style btn-list">Edit selection</button>
						</Link> */}
					</div>
				</div>
			</div>
		</>
	);
};

popupSearch.propTypes = {
	plant: PropTypes.object,
	// plantName: PropTypes.string,
	handlePopup: PropTypes.func,
	// plantDescription: PropTypes.string
	// plant: PropTypes.string
	message: PropTypes.string
};
