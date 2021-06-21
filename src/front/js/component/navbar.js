import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<span className="navbar-brand ml-4 h1">
					<img className="logo-img" src="https://i.imgur.com/riBIzbc.png" />
				</span>
			</Link>

			<div className="ml-auto">
				<Link to="/signuppersonal">
					<button className="btn btn-primary">Go to Sign-up Page</button>
				</Link>
			</div>
		</nav>
	);
};
