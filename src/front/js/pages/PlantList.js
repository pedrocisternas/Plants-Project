import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Popup } from "../component/popup";

export const PlantList = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const [plant, setPlant] = useState("");

	const toggleDetailsPopup = elem => {
		setPlant(elem);
		setIsOpen(!isOpen);
	};

	return (
		<>
			<h1 className="text-center py-3 heading">Your Selected Plants List</h1>
			<i className="fab fa-2x fa-pagelines mx-auto mb-3" />
			<div className="container">
				{store.plants.map((el, i) => (
					<div className="plant-list-box" key={i}>
						<div className="plant-list ">
							<div className="d-flex justify-content-between align-items-center">
								<div>
									#{i + 1}: <span className="plant-list-text"> {el}</span>
								</div>
								<div>
									<button className="btn-style btn-list " onClick={() => toggleDetailsPopup(el)}>
										Details
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
				{isOpen && <Popup plantDetails={plant} handlePopup={() => toggleDetailsPopup(plant)} />}
			</div>
		</>
	);
};
