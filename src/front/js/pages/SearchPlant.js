import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchPlant = () => {
	const { store, actions } = useContext(Context);
	const [filterList, setFilterList] = useState([
		{
			id: 105,
			name: "Annual",
			value: "annual"
		},
		{
			id: 106,
			name: "Perennial",
			value: "perennial"
		},
		{
			id: 107,
			name: "Flowers",
			value: "flower"
		},
		{
			id: 111,
			name: "Trees",
			value: "tree"
		},
		{
			id: 113,
			name: "Ground cover",
			value: "ground cover"
		},
		{
			id: 118,
			name: "Shrubs",
			value: "shrub"
		},
		{
			id: 108,
			name: "Blooms in spring",
			value: "spring"
		},
		{
			id: 112,
			name: "Blooms in summer",
			value: "summer"
		},
		{
			id: 114,
			name: "Blooms in fall",
			value: "fall"
		},
		{
			id: 109,
			name: "Plants for full sun",
			value: "sun"
		},
		{
			id: 115,
			name: "Plants for part sun",
			value: "part sun"
		},
		{
			id: 116,
			name: "Plants for filtered shade",
			value: "filtered shade"
		},
		{
			id: 117,
			name: "Plants for shade",
			value: "shade"
		},
		{
			id: 110,
			name: "Edible",
			value: "edible"
		},
		{
			id: 119,
			name: "Blooming",
			value: "blooming"
		}
	]);
	const [searchLists, setSearchLists] = useState(store.plantLibrary);
	const [activeFilter, setActiveFilter] = useState([]);

	const [filteredList, setFilteredList] = useState(null);

	const onFilterChange = filter => {
		if (filter === "ALL") {
			if (activeFilter.length === filterList.length) {
				setActiveFilter([]);
			} else {
				setActiveFilter(filterList.map(filter => filter.value));
			}
		} else {
			if (activeFilter.includes(filter)) {
				const filterIndex = activeFilter.indexOf(filter);
				const newFilter = [...activeFilter];
				newFilter.splice(filterIndex, 1);
				setActiveFilter(newFilter);
			} else {
				setActiveFilter([...activeFilter, filter]);
			}
		}
	};

	useEffect(
		() => {
			if (activeFilter.length === 0) {
				setFilteredList(null);
			}
			if (activeFilter.length === filterList.length) {
				setFilteredList(searchLists);
			} else {
				setFilteredList(
					searchLists.filter(item => {
						return (
							activeFilter.includes(item.growthCycle) ||
							activeFilter.includes(item.plantType) ||
							activeFilter.includes(item.plantIs) ||
							activeFilter.includes(item.bloomTime ? item.bloomTime[0] : "nothing") ||
							activeFilter.includes(item.bloomTime ? item.bloomTime[1] : "nothing") ||
							activeFilter.includes(item.bloomTime ? item.bloomTime[2] : "nothing") ||
							activeFilter.includes(item.lightExposure ? item.lightExposure[0] : "nothing") ||
							activeFilter.includes(item.lightExposure ? item.lightExposure[1] : "nothing") ||
							activeFilter.includes(item.lightExposure ? item.lightExposure[2] : "nothing") ||
							activeFilter.includes(item.lightExposure ? item.lightExposure[3] : "nothing")
						);
					})
				);
			}
		},
		[activeFilter]
	);

	return (
		<div className="container h-100">
			<h1 className="text-center py-3 heading">Search for a Plant</h1>

			<div className="d-flex">
				<form className="w-50">
					<div className="form-check d-block form-check-inline">
						<input
							className="form-check-input"
							type="checkbox"
							id="all"
							value="all"
							onClick={() => onFilterChange("ALL")}
							checked={activeFilter.length === filterList.length}
						/>
						<label className="form-check-label" htmlFor="all">
							ALL
						</label>
					</div>
					{filterList.map(filter => (
						<div className="form-check d-block form-check-inline" key={filter.id}>
							<input
								className="form-check-input"
								type="checkbox"
								id={filter.id}
								value={filter.value}
								onClick={e => onFilterChange(filter.value)}
								checked={activeFilter.includes(filter.value)}
							/>
							<label className="form-check-label mr-3" htmlFor={filter.id}>
								{filter.name}
							</label>
						</div>
					))}
				</form>
				<ul className="w-50">
					{filteredList &&
						filteredList.map((item, i) => (
							<div key={i}>
								<li>{item.commonName}</li>
							</div>
						))}
				</ul>
			</div>
		</div>
	);
};
