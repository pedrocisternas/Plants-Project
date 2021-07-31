import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const GardenInfo = props => {
	const { store, actions } = useContext(Context);
	const [gardenInfo, setGardenInfo] = useState({
		hardiness_zone: store.usersPersonal[0]["hardiness_zone"],
		zipcode: store.usersPersonal[0]["zipcode"],
		grid_width: store.usersPersonal[0]["grid_width"],
		grid_length: store.usersPersonal[0]["grid_length"],
		experience: store.usersPersonal[0]["experience"]
	});

	//const [badge, setBadge] = useState(false);

	// const showBadge = e => {
	// 	console.log(e.target.value);
	// 	if (badge && e.target.value == "green") {
	// 		<img src="https://i.imgur.com/naA552h.png" alt="thumb" />;
	// 	} else if (badge && e.target.value == "new") {
	// 		<img src="https://i.imgur.com/sQrAVZK.png" alt="newbie" />;
	// 	} else if (badge && e.target.value == "some") {
	// 		<img src="https://i.imgur.com/RWxOMaU.png" alt="rocket" />;
	// 	} else <img src="https://i.imgur.com/slVx6Xp.png" alt="medal" />;
	// };

	return (
		<div className=" w-75 m-auto ">
			<h3 className="heading text-center">Garden Information</h3>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/8ratEk4.png" alt="floral design" />
			</p>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Hardiness Zone: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={
						store.usersPersonal[0].hardiness_zone
							? store.usersPersonal[0].hardiness_zone
							: "Enter Your Hardiness Zone"
					}
					aria-label="hardiness_zone"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0].hardiness_zone}</div> */}
			</div>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Zipcode: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={store.usersPersonal[0].zipcode ? store.usersPersonal[0].zipcode : "Enter Your Zipcode"}
					aria-label="zipcode"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["zipcode"]}</div> */}
			</div>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Plot Width: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={store.usersPersonal[0]["grid_width"]}
					aria-label="grid_width"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["grid_width"]}</div> */}
			</div>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Plot Length: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={store.usersPersonal[0]["grid_length"]}
					aria-label="grid_length"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["grid_length"]}</div> */}
			</div>

			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0">
					Level of Gardening Experience:{" "}
					<span className="badge ">
						<img src="https://i.imgur.com/slVx6Xp.png" alt="medal" />
					</span>
				</h5>
				<select className="custom-select color-item text-center w-50">
					<option selected>
						{store.usersPersonal[0].experience ? store.usersPersonal[0].experience : "Choose Level"}
					</option>
					<option value="new">New-born gardener</option>
					<option value="some">Climbing the learning curve</option>
					<option value="green">Green thumb level</option>
				</select>
			</div>

			<div className="w-50 m-auto d-flex justify-content-between">
				<Link to="/profile">
					<button type="button" className="btn btn-style m-auto ">
						Back
					</button>
				</Link>
				{/* <button type="button" className="btn btn-style m-auto ">
					Edit
				</button> */}
				<button type="button" className="btn btn-style m-auto ">
					Update and Save
				</button>
			</div>
		</div>
	);
};
