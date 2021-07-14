import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<nav className="navbar m-0">
			<Link to={store.usersPersonal[0].username != null ? "/homereg" : "/"}>
				<span className="navbar-brand ml-4 h1">
					<img className="logo-img" src="https://i.imgur.com/3VBrs4C.png" />
				</span>
			</Link>
			{props.show ? (
				<>
					<Link to="/homereg">
						<span className="color-item mt-3 mx-3">My garden</span>
					</Link>
					<Link to="/plantlist">
						<span className="color-item mt-3 mx-3">Selected Plants</span>
					</Link>
				</>
			) : null}
			{store.usersPersonal[0]["username"] == null ? (
				<Link to="/login">
					<button type="button" className="btn btn-style my-4">
						Log In
					</button>
				</Link>
			) : (
				<div className="dropdown ml-auto">
					<button
						onClick={() => setShowDropdown(!showDropdown)}
						className="btn btn-style text-white dropdown-toggle "
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{store.usersPersonal[0]["username"]}
					</button>
					<div
						className={showDropdown ? "dropdown-menu show" : "d-none"}
						aria-labelledby="dropdownMenuButton">
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
			)}
		</nav>
	);
};

Navbar.propTypes = {
	show: PropTypes.bool
};
