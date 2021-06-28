import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlantList = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDetailsPopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<h1 className="text-center py-3 heading">Your Selected Plants List</h1>
			<div className="container ">
				{store.plants.map((el, i) => (
					<div className="plant-list-box" key={i}>
						<div className="plant-list">
							#{i + 1}:{" "}
							<span className="plant-list-text">
								{el} <i className="fas fa-seedling" />
							</span>
							<div />
							<button className="btn-style btn-list" onClick={toggleDetailsPopup}>
								Details
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
