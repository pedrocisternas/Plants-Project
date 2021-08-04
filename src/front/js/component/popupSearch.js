import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlantList } from "../pages/PlantList";
import { Context } from "../store/appContext";

export const PopupSearch = props => {
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
			<div className="popup-search-container">
				<div className="popup-search-content">
					<div className="d-flex">
						<div>
							<div className="d-flex flex-column mb-3">
								<div className="d-flex">
									<h2 className="color-item2 mr-3">{props.plant["commonName"]}</h2>
									<span>
										{props.plant.plantIs == "edible" ? (
											<img src="https://i.imgur.com/fo0eeGM.png" alt="chef's hat" />
										) : (
											<img src="https://i.imgur.com/7KnWoOT.png" alt="plant" />
										)}
									</span>
								</div>
								<h5>
									<i>({props.plant["scientificName"]})</i>
								</h5>
							</div>
							<div className="d-flex">
								<div className="mr-5">
									<div>
										<img className="popup-search-img" src={props.plant["plantImage"]} alt="..." />
									</div>
								</div>
								<div>
									<p>
										Growth Cycle: <i className="color-item">{props.plant["growthCycle"]}</i>{" "}
									</p>
									<p>
										Plant type: <i className="color-item">{props.plant["growthType"]}</i>{" "}
									</p>
									<p>
										Leaf shape: <i className="color-item">{props.plant["leafType"]}</i>{" "}
									</p>
									<p>
										Height: <i className="color-item">up to {props.plant["height"]} feet</i>
									</p>
									<p>
										Light:{" "}
										<i className="color-item"> needs {props.plant["lightExposure"].toString()}</i>
									</p>
									<p>
										Hardiness Zone:{" "}
										<i className="color-item">{props.plant["hardinessZone"].toString()}</i>
									</p>
									<p>
										Blooming: <i className="color-item">{props.plant["bloomTime"].toString()}</i>
									</p>
								</div>
							</div>
							<p>{props.plant["comments"]}</p>
						</div>
						<div onClick={props.handlePopupSearch}>
							<i className="far fa-2x fa-times-circle color-item2" />
						</div>
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

PopupSearch.propTypes = {
	plant: PropTypes.object,
	// plantName: PropTypes.string,
	handlePopupSearch: PropTypes.func,
	// plantDescription: PropTypes.string
	// plant: PropTypes.string
	message: PropTypes.string
};
