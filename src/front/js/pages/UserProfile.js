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
			<div className="d-flex flex-column justify-content-center align-items-center mt-4 w-100 m-auto">
				<div className="d-flex flex-row align-items-center ml-4 my-4 pl-4 py-4 text-anime">
					<Link to="/personal">
						<button type="button" className="btn border-0 btn-profile list-text">
							Personal Information
						</button>
					</Link>
					<img className="ml-5" src="https://i.imgur.com/uXEpgQA.png" alt="scarecrow" />
				</div>
				<div className="d-flex flex-row align-items-center my-4 mr-4 py-4 pr-4 text-anime">
					<img className="mr-5" src="https://i.imgur.com/PYcBt5v.png" alt="garden tools" />
					<Link to="/garden">
						<button type="button" className="btn border-0 btn-profile list-text">
							Garden Information
						</button>
					</Link>
				</div>
				<div className="d-flex flex-row align-items-center ml-4 my-4 pl-4 py-4 text-anime">
					<Link to="/plantlist">
						<button type="button" className="btn border-0 btn-profile list-text">
							See Your Selections
						</button>
					</Link>
					<span />
					<img className="ml-5" src="https://i.imgur.com/p5SeFG5.png" alt="flower" />
				</div>
			</div>
		</div>
	);
};
