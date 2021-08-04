import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Popup } from "../component/popup";
import { PopupSearch } from "../component/popupSearch";

// import ReactToPrint from "react-to-print";

//import { ComponentToPrint } from "../pages/";

export const PlantList = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const [plantName, setPlantName] = useState("");
	const [plantDescription, setPlantDescription] = useState("");

	const toggleDetailsPopup = elem => {
		setPlantName(elem["name"]);
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
			<p className="text-center">
				<img src="https://i.imgur.com/lIG5fke.png" alt="green tea" />
			</p>
			{/* <i className="fab fa-2x fa-pagelines mx-auto mb-3" /> */}
			<div className="container">
				{store.garden.map((el, i) => {
					if (el != null) {
						return (
							<div className="plant-list-box" key={i}>
								<div className="plant-list ">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											#{i + 1}: <span className="list-text">{el["name"]}</span>
										</div>
										<div>
											<button
												className="btn-style btn-list zoom-in-plant-list"
												onClick={() => helper(el, i)}>
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
					<PopupSearch
						plant={store.plantLibrary.find(
							element => element["commonName"] == store.garden[store.squareSelected]["name"]
						)}
						// plantName={plantName}
						// plantDescription={plantDescription}
						handlePopupSearch={() => toggleDetailsPopup(plantName)}
					/>
				)}
			</div>
			<div className="w-50 d-flex justify-content-around m-auto">
				<div className="w-50 m-auto">
					<Link to="/homeReg">
						<button type="button" className="btn btn-style m-3 w-100">
							Add Another Plant
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};
