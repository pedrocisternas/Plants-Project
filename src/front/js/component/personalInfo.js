import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonalInfo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div>
				{store.users.map((user, i) => {
					console.log("USER IS: ", user);
					<div key={i}>
						<p>User #{i}:</p>
						<div>
							Name:
							{user.first_name}
							{""}
							{user.last_name}
						</div>
						<div>
							Email:
							{user["email"]}
						</div>
						<div>
							Password:
							{user["password"]}
						</div>
					</div>;
				})}
			</div>
		</>
	);
};
