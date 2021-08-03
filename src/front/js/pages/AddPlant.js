import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddPlant = () => {
	const { store, actions } = useContext(Context);
	const [plantName, setPlantName] = useState(null);

	// const [newPlant, setNewPlant] = useState("");
	// const plantInput = e => {
	// 	setPlantName(e.target.value);
	// };

	const [searchTerm, setSearchTerm] = useState(null);
	const [searchResults, setSearchResults] = useState([]);

	let results = [];

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
	useEffect(() => {
		searchTerm
			? (results = store.plantLibrary.filter(
					plant =>
						plant.commonName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
						plant.commonName.toLowerCase().includes(searchTerm.toLowerCase())
			  ))
			: (results = []);
		setSearchResults(results);
	}, [searchTerm]);

	const postPlant = name => {
		const plantObject = {
			name: name,
			user_id: store.usersPersonal[0]["id"],
			grid_location: store.squareSelected
		};
		actions.postNewPlant(plantObject);
	};

	return (
		<div className="container h-100">
			<h1 className="text-center py-3 heading">Add a Plant to Your Garden</h1>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/jz0oCz6.png" alt="lens" />
			</p>
			<div className="input-group mb-3 d-flex flex-column">
				<input
					// onChange={e => {
					// 	setPlantName(e.target.value);
					// }}
					onChange={handleChange}
					value={searchTerm}
					type="text"
					className="form-control rounded mt-4"
					// onChange={plantInput}
					placeholder="Type plant name"
					aria-label="Type plant name"
					aria-describedby="button-addon2"
					style={{ width: "100%" }}
				/>

				{/* <div className="input-group-append">
					<button className="btn btn-style m-0" type="button" id="button-addon2">
						Search
					</button>
				</div> */}
				<div>
					<ul className="list-group">
						{searchResults.map((plant, i) => (
							<li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
								{plant.commonName}
								<Link
									className="d-flex align-items-center"
									to="/homereg"
									style={{ textDecoration: "none" }}>
									<button
										onClick={() => postPlant(plant.commonName)}
										className="btn-style zoom-in-plant-list">
										Add
									</button>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="d-flex flex-row justtify-content-start align-items-center">
				{/* <div>
					<Link to="/homereg">
						<button
							onClick={() => {
								if (plantName) {
									actions.addAPlant(
										{
											plantName: plantName,
											description:
												"Here goes the descrption of the added plant. Right now is hardcoded, but the info will come from the API."
										},
										store.squareSelected
									);
								} else {
									alert("You need to enter a plant name.");
								}
							}}
							className="btn btn-style"
							type="button">
							Add Plant
						</button>
					</Link>
				</div> */}
				<Link to="/plantlist">
					<button type="button" className="btn btn-style btn-list ml-0 my-3">
						See Selected
					</button>
				</Link>
				<Link to="/homeReg">
					<button type="button" className="btn btn-style mx-4">
						Go Back
					</button>
				</Link>
			</div>
		</div>
	);
};
