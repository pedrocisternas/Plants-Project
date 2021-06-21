import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<span className="navbar-brand ml-4 h1">
					<img className="logo-img" src="https://i.imgur.com/xU3Idvh.png" />
				</span>
			</Link>

			{/* <div className="ml-auto">
				<Link to="/signuppersonal">
					<div className="btn btn-primary">Go to Sign-up Page</div>
				</Link>
			</div> */}
			<div className="dropdown ">
				<button
					onClick={() => setShowDropdown(!showDropdown)}
					className="btn bg-success text-white dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					{`User's Name Here`}
				</button>
				<div className={showDropdown ? "dropdown-menu show" : "d-none"} aria-labelledby="dropdownMenuButton">
					<Link to="/signuppersonal" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item">Sign Up</div>
					</Link>
					<Link to="/login" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item">Log In</div>
					</Link>
					<Link to="/homeReg" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item">Your Profile</div>
					</Link>
					<Link to="/logout" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item">Log Out</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
