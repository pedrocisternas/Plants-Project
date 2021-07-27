import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchPlant = ()=> {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { store, actions } = useContext(Context);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = store.plantLibrary.filter(plant =>
            plant.commonName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

  return (
    <div className="container h-100">
        <h1 className="text-center py-3 heading">Search for a Plant</h1>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        />
        <ul>
            {searchResults.map(plant => (
             <li>{plant.commonName}</li>
        ))}
        </ul>
        <button type="button" className="btn btn-style" onClick={actions.addPlant}></button>
    </div>
  );
}