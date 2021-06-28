import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Popup } from "../component/popup";

export const PlantList = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDetailsPopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<h1 className="text-center py-3 heading">Your Selected Plants List</h1>
			<i className="fab fa-2x fa-pagelines mx-auto mb-3" />
			<div className="container">
				{store.plants.map((el, i) => (
					<div className="plant-list-box" key={i}>
						<div className="plant-list ">
							<div className="d-flex justify-content-between align-items-center">
								<div>
									#{i + 1}: <span className="plant-list-text"> {el}</span>
								</div>
								<div>
									<button className="btn-style btn-list " onClick={() => toggleDetailsPopup()}>
										Details
									</button>
								</div>
							</div>
							{isOpen && (
								<Popup
									details={
										<>
											<div className="d-flex">
												<h2 className="color-item mr-3">More about {el}</h2>
												<i className="fab fa-2x fa-pagelines color-item" />
											</div>
											<p>
												Dis parturient montes nascetur ridiculus. Eget mauris pharetra et
												ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec.
												Nibh mauris cursus mattis molestie a iaculis at. Egestas dui id ornare
												arcu. Ullamcorper sit amet risus nullam eget felis eget nunc.
												Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Feugiat
												in fermentum posuere urna nec tincidunt praesent. Felis bibendum ut
												tristique et egestas quis ipsum suspendisse. Dis parturient montes
												nascetur ridiculus. Eget mauris pharetra et ultrices. A cras semper
												auctor neque vitae tempus quam pellentesque nec. Nibh mauris cursus
												mattis molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper
												sit amet risus nullam eget felis eget nunc. Pellentesque sit amet
												porttitor eget dolor morbi non arcu risus. Feugiat in fermentum posuere
												urna nec tincidunt praesent. Felis bibendum ut tristique et egestas quis
												ipsum suspendisse.
											</p>
										</>
									}
									handlePopup={() => toggleDetailsPopup()}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};
