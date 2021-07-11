import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Popup } from "../component/popup";

export const PlantList = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const [plantName, setPlantName] = useState("");
	const [plantDescription, setPlantDescription] = useState("");

	const toggleDetailsPopup = elem => {
		setPlantName(elem["plantName"]);
		setPlantDescription(elem["description"]);
		setIsOpen(!isOpen);
	};

	const helper = (el, i) => {
		actions.updateSquareSelected(i);
		toggleDetailsPopup(el);
	};
	return (
		<>
			<h1 className="text-center py-3 heading">Your Selected Plants List</h1>
			<i className="fab fa-2x fa-pagelines mx-auto mb-3" />
			<div className="container">
				{store.garden.map((el, i) => {
					if (el != null) {
						return (
							<div className="plant-list-box" key={i}>
								<div className="plant-list ">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											#{i + 1}: <span className="list-text">{el["plantName"]}</span>
										</div>
										<div>
											<button className="btn-style btn-list " onClick={() => helper(el, i)}>
												Details
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
				{isOpen && (
					<Popup
						plantName={plantName}
						plantDescription={plantDescription}
						handlePopup={() => toggleDetailsPopup(plantName)}
					/>
				)}
			</div>
		</>
	);
};
