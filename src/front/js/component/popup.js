import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlantList } from "../pages/PlantList";
import { Context } from "../store/appContext";

export const Popup = props => {
	const { store, actions } = useContext(Context);
	//console.log("POPUP", props.plant);
	const helper = () => {
		props.handlePopup();
		actions.deletePlant({
			grid_location: store.squareSelected,
			user_id: store.usersPersonal[0]["id"]
		});
	};

	return (
		<>
			<div className="popup-container">
				<div className="popup-content">
					<div className="d-flex">
						<div>
							<div className="d-flex">
								<h2 className="color-item mr-3">More about {props.plant["commonName"]}</h2>
								{/* <i className="fab fa-2x fa-pagelines color-item" /> */}
								<span>
									<img src="https://i.imgur.com/7KnWoOT.png" alt="plant" />
								</span>
							</div>
							<p className="color-item">Growth Cycle: {props.plant["growthCycle"]}</p>
							<p>{props.plant["comments"]}</p>
						</div>
						<div onClick={props.handlePopup}>
							<i className="far fa-2x fa-times-circle color-item2" />
						</div>
					</div>
					<div className="text-center">
						<button onClick={() => helper()} className="btn btn-style btn-list">
							Delete
						</button>
						{/* <Link to="/addplant">
							<button className="btn btn-style btn-list">Edit selection</button>
						</Link> */}
					</div>
				</div>
			</div>
		</>
	);
};

Popup.propTypes = {
	plant: PropTypes.object,
	// plantName: PropTypes.string,
	handlePopup: PropTypes.func
	// plantDescription: PropTypes.string
	// plant: PropTypes.string
};
