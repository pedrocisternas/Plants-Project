import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h2 className="heading text-center">
				{store.users[0].first_name} {store.users[0].last_name}
			</h2>
			<div className="d-flex flex-row justify-content-center align-items-center">
				<div className="d-flex flex-row align-items-center m-4 p-4 grid-bg">
					<Link to="/personal">
						<button type="button" className="btn border-0 ">
							Personal Information
						</button>
					</Link>
					<i className="far fa-2x  fa-user-circle color-item" />
				</div>
				<div className="d-flex flex-row align-items-center m-4 p-4 grid-bg">
					<Link to="/garden">
						<button type="button" className="btn border-0 ">
							Garden Information
						</button>
					</Link>
					<i className="fas fa-2x color-item fa-seedling" />
				</div>
			</div>
		</div>
	);
};
