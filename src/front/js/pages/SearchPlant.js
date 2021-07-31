import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchPlant = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [checked, setChecked] = useState([]);

	const { store, actions } = useContext(Context);

	const [annual, setAnnual] = useState(false);
	const [perennial, setPerennial] = useState(false);

	const [checkboxValue, setCheckboxValue] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);
	const [plantInfo, setPlantInfo] = useState("");

	const handleCheckbox = (e, plantInfo) => {
		console.log("THIS ", e.target.value);
		console.log(store.plantLibrary);
		if (e.target.value == "annual") {
			setAnnual();
		}

		// const isChecked = checked;
		// console.log(isChecked);
		if (checked) {
			const checkedPlant = store.plantLibrary.filter((el, i) => {
				console.log(el.plantInfo, e.target.value);
				return el[plantInfo] == e.target.value;
			});
			setFilteredResults([...filteredResults, ...checkedPlant]);
		} else setFilteredResults([]);

		//console.log(checkedPlant);
	};

	const runSearch = () => {
		var searchedPlants = checked.map((attribute, i) => {
			var savedPlants = store.plantLibrary.map((plant, ind) => {
				if (plant.growthCycle == attribute || plant.plantType == attribute) {
					return plant;
				}
			});
			return savedPlants;
		});

		console.log("Searched plants", searchedPlants);

		// if (checked) {
		// 	const checkedPlant = store.plantLibrary.filter((el, i) => {
		// 		console.log(el.plantInfo, e.target.value);
		// 		return el[plantInfo] == e.target.value;
		// 	});
		// 	setFilteredResults([...filteredResults, ...checkedPlant]);
		// } else setFilteredResults([]);
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
				<div>Growth Cycle</div>
				<div className="form-check form-check-inline">
					<input
						onClick={e => setChecked([...checked, "annual"])}
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
						onClick={e => setChecked([...checked, "perennial"])}
					/>
					<label className="form-check-label" htmlFor="inlineCheckbox2">
						Perennials
					</label>
				</div>
			</div>
			<div>
				<div>Plant Type</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios1"
						value="option1"
					/>
					<label className="form-check-label" htmlFor="exampleRadios1">
						Default radio
					</label>
				</div>

				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" id="trees" value="trees" />
					<label className="form-check-label" htmlFor="trees">
						Trees
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" id="cover" value="cover" />
					<label className="form-check-label" htmlFor="cover">
						Ground Cover
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" id="shrub" value="shrub" />
					<label className="form-check-label" htmlFor="shrub">
						Shrub
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="flower"
						value="flower"
						onClick={e => setChecked([...checked, "flower"])}
					/>
					<label className="form-check-label" htmlFor="bulb">
						Flower
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" id="all" value="all" />
					<label className="form-check-label" htmlFor="all">
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
				// if (checked) console.log("hi");
			})}
			<button type="button" className="btn btn-style" onClick={runSearch}>
				Search
			</button>

			<button type="button" className="btn btn-style" onClick={actions.addPlant}>
				Add
			</button>
		</div>
	);
};
