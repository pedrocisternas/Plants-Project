import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<nav className="navbar  m-0">
			<Link to="/">
				<span className="navbar-brand ml-4 h1">
					<img className="logo-img" src="https://i.imgur.com/3VBrs4C.png" />
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
					className="btn btn-style text-white dropdown-toggle "
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					{"Garden Tools"}
				</button>
				<div className={showDropdown ? "dropdown-menu show" : "d-none"} aria-labelledby="dropdownMenuButton">
					<Link to="/signuppersonal" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item heading">Join Plotters</div>
					</Link>
					<Link to="/login" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item heading">Log In</div>
					</Link>
					<Link to="/profile" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item heading">Your Profile</div>
					</Link>
					<Link to="/homeReg" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item heading">Add Plants</div>
					</Link>
					<Link to="/logout" onClick={() => setShowDropdown(!showDropdown)}>
						<div className="dropdown-item heading">Log Out</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
