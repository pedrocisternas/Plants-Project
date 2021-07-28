import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchPlant = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [checked, setChecked] = useState(false);
	const { store, actions } = useContext(Context);

	const [checkboxValue, setCheckboxValue] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);

	// useEffect(
	// 	() => {
	// 		setFilteredResults([...filteredResults, handleCheckbox()]);
	// 		handleCheckbox();
	// 	},
	// 	[checkboxValue]
	// );

	const handleCheckbox = (e, plantInfo) => {
		console.log("THIS ", e.target.value);
		console.log(store.plantLibrary);
		setChecked(!checked);
		const isChecked = checked;
		if (isChecked) {
			const checkedPlant = store.plantLibrary.filter((el, i) => {
				console.log(el.plantInfo, e.target.value);
				return el[plantInfo] == e.target.value;
			});
			setFilteredResults([...filteredResults, ...checkedPlant]);
		}

		//console.log(checkedPlant);
	};

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
	useEffect(
		() => {
			const results = store.plantLibrary.filter(plant =>
				plant.commonName.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setSearchResults(results);
		},
		[searchTerm]
	);

	return (
		<div className="container h-100">
			<h1 className="text-center py-3 heading">Search for a Plant</h1>
			<div>
				<p>Growth Cycle</p>
				<div className="form-check form-check-inline">
					<input
						onClick={e => handleCheckbox(e, "growthCycle")}
						className="form-check-input"
						type="checkbox"
						id="annual"
						value="annual"
					/>
					<label className="form-check-label" htmlFor="inlineCheckbox1">
						Annuals
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="checkbox"
						id="perennial"
						value="perennial"
						onClick={e => handleCheckbox(e, "growthCycle")}
					/>
					<label className="form-check-label" htmlFor="inlineCheckbox2">
						Perennials
					</label>
				</div>
			</div>
			<div>
				<p>Plant Type</p>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="checkbox" id="trees" value="trees" checked />
					<label className="form-check-label" htmlFor="inlineCheckbox1">
						Trees
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="checkbox" id="cover" value="cover" />
					<label className="form-check-label" htmlFor="inlineCheckbox2">
						Ground Cover
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="checkbox" id="shrub" value="shrub" />
					<label className="form-check-label" htmlFor="inlineCheckbox2">
						Shrub
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="checkbox" id="bulb" value="bulb" />
					<label className="form-check-label" htmlFor="inlineCheckbox2">
						Bulb
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="checkbox" id="all" value="all" />
					<label className="form-check-label" htmlFor="inlineCheckbox2">
						All plants
					</label>
				</div>
			</div>
			{/* <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} /> */}
			{/* <ul>
				{searchResults.map((plant, i) => (
					<li key={i}>{plant.commonName}</li>
				))}
			</ul> */}
			{searchResults.map((plant, i) => {
				if (checked) console.log("hi");
			})}
			<button type="button" className="btn btn-style" onClick={actions.addPlant}>
				Add
			</button>
		</div>
	);
};
