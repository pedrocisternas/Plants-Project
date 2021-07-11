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
		actions.deleteAPlant(store.squareSelected);
	};

	return (
		<>
			<div className="popup-container">
				<div className="popup-content">
					<div className="d-flex">
						<div>
							<div className="d-flex">
								<h2 className="color-item mr-3">More about {props.plantName}</h2>
								<i className="fab fa-2x fa-pagelines color-item" />
							</div>
							<p>{props.plantDescription}</p>
						</div>
						<div onClick={props.handlePopup}>
							<i className="far fa-2x fa-times-circle color-item2" />
						</div>
					</div>
					<div className="text-center">
						<button onClick={() => helper()} className="btn btn-style btn-list">
							Delete
						</button>
						<Link to="/addplant">
							<button className="btn btn-style btn-list">Edit selection</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

Popup.propTypes = {
	plantName: PropTypes.string,
	handlePopup: PropTypes.func,
	plantDescription: PropTypes.string
	// plant: PropTypes.string
};
