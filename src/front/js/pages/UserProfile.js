import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="w-100 user-profile-name">
				<h2 className="heading text-center">
					{store.usersPersonal[0].first_name} {store.usersPersonal[0].last_name}
				</h2>
			</div>
			<div className="d-flex flex-column justify-content-center align-items-center  w-50 m-auto">
				<div className="d-flex flex-row align-items-center m-4 p-4 ">
					<Link to="/personal">
						<button type="button" className="btn border-0 btn-profile list-text">
							Personal Information
						</button>
					</Link>
					<i className="far fa-2x color-item3 fa-user-circle" />
				</div>
				<div className="d-flex flex-row align-items-center m-4 p-4 ">
					<Link to="/garden">
						<button type="button" className="btn border-0 btn-profile list-text">
							Garden Information
						</button>
					</Link>
					<i className="fas fa-2x color-item3 fa-seedling" />
				</div>
				<div className="d-flex flex-row align-items-center m-4 p-4 ">
					<Link to="/plantlist">
						<button type="button" className="btn border-0 btn-profile list-text">
							See Your Selections
						</button>
					</Link>
					<i className="far fa-2x color-item3 fa-check-circle" />
				</div>
			</div>
		</div>
	);
};
