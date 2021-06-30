import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlantList } from "../pages/PlantList";

export const Popup = props => {
	//console.log("POPUP", props.plant);
	return (
		<>
			<div className="popup-container">
				<div className="popup-content">
					<div className="d-flex">
						<div>
							<div className="d-flex">
								<h2 className="color-item mr-3">More about {props.plantDetails}</h2>
								<i className="fab fa-2x fa-pagelines color-item" />
							</div>
							<p>
								Dis parturient montes nascetur ridiculus. Eget mauris pharetra et ultrices. A cras
								semper auctor neque vitae tempus quam pellentesque nec. Nibh mauris cursus mattis
								molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper sit amet risus nullam
								eget felis eget nunc. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.
								Feugiat in fermentum posuere urna nec tincidunt praesent. Felis bibendum ut tristique et
								egestas quis ipsum suspendisse. Dis parturient montes nascetur ridiculus. Eget mauris
								pharetra et ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec.
								Nibh mauris cursus mattis molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper
								sit amet risus nullam eget felis eget nunc. Pellentesque sit amet porttitor eget dolor
								morbi non arcu risus. Feugiat in fermentum posuere urna nec tincidunt praesent. Felis
								bibendum ut tristique et egestas quis ipsum suspendisse.
							</p>
						</div>
						<div onClick={props.handlePopup}>
							<i className="far fa-2x fa-times-circle color-item2" />
						</div>
					</div>
					<div className="text-center">
						<button onClick={props.handlePopup} className="btn btn-style btn-list">
							Delete
						</button>

						<Link to="/addplant">
							<button className="btn btn-style btn-list">Go Back to Search</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

Popup.propTypes = {
	details: PropTypes.string,
	handlePopup: PropTypes.func,
	plant: PropTypes.string
};
