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

	const [selectExperience, setSelectExperience] = useState("");

	const showBadge = () => {
		// setSelectExperience(e.target.value);
		// console.log(e.target.value);
		let img = "";
		if (gardenInfo.experience == "Green thumb level") {
			img = <img src="https://i.imgur.com/naA552h.png" alt="thumb" />;
		} else if (gardenInfo.experience == "New-born gardener") {
			img = <img src="https://i.imgur.com/Gj8rbL8.png" alt="newbie" />;
		} else if (gardenInfo.experience == "Climbing the learning curve") {
			img = <img src="https://i.imgur.com/l3kIM5q.png" alt="climber" />;
		} else img = <img src="https://i.imgur.com/slVx6Xp.png" alt="medal" />;
		return img;
	};

	const userGardenInput = e => {
		// setPlotSize(parseInt(e.target.value));
		setGardenInfo({ ...gardenInfo, [e.target.name]: e.target.value });
	};

	const userGardenInputNumber = e => {
		// setPlotSize(parseInt(e.target.value));
		setGardenInfo({ ...gardenInfo, [e.target.name]: parseInt(e.target.value) });
	};

	//const [badge, setBadge] = useState(false);

	const helper = () => {
		actions.editInfoUser(gardenInfo);
	};

	return (
		<div className=" w-75 m-auto ">
			<h3 className="heading text-center">Garden Information</h3>
			<p className="text-center mb-1">
				<img src="https://i.imgur.com/8ratEk4.png" alt="floral design" />
			</p>
			<div className="user-info d-flex flex-column">
				<div className="d-flex justify-content-around flex-row">
					<h5 className="heading text-center mb-0 w-25">Hardiness Zone: </h5>
					<input
						className="color-item2 text-center w-25"
						placeholder={
							store.usersPersonal[0].hardiness_zone
								? store.usersPersonal[0].hardiness_zone
								: "Enter Your Hardiness Zone"
						}
						onChange={userGardenInput}
						aria-label="hardiness_zone"
						name="hardiness_zone"
						type="text"
					/>
				</div>
				<div style={{ marginLeft: "8.3vw", width: "20vw" }}>
					<Link to="/hardiness">
						<p className="text-center" style={{ fontSize: "1vw" }}>
							Find your hardiness zone
						</p>
					</Link>
				</div>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0].hardiness_zone}</div> */}
			</div>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Zipcode: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={store.usersPersonal[0].zipcode ? store.usersPersonal[0].zipcode : "Enter Your Zipcode"}
					onChange={userGardenInput}
					aria-label="zipcode"
					name="zipcode"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["zipcode"]}</div> */}
			</div>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Plot Width: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={
						store.usersPersonal[0]["grid_width"]
							? store.usersPersonal[0]["grid_width"]
							: "Enter Your Grid Width"
					}
					onChange={userGardenInputNumber}
					aria-label="grid_width"
					name="grid_width"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["grid_width"]}</div> */}
			</div>
			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0 w-25">Plot Length: </h5>
				<input
					className="color-item2 text-center w-25"
					placeholder={
						store.usersPersonal[0]["grid_length"]
							? store.usersPersonal[0]["grid_length"]
							: "Enter Your Grid Length"
					}
					onChange={userGardenInputNumber}
					aria-label="grid_length"
					name="grid_length"
					type="text"
				/>
				{/* <div className="color-item2 text-center">{store.usersPersonal[0]["grid_length"]}</div> */}
			</div>

			<div className="user-info d-flex justify-content-around">
				<h5 className="heading text-center mb-0">
					Level of Gardening Experience:{" "}
					<span className="badge ">
						{/* <img src={"https://i.imgur.com/slVx6Xp.png"} alt="medal" /> */}
						{showBadge()}
					</span>
				</h5>
				<select
					className="custom-select color-item text-center w-50"
					onChange={userGardenInput}
					name="experience">
					<option selected>
						{store.usersPersonal[0].experience ? store.usersPersonal[0].experience : "Choose Level"}
					</option>
					<option value="New-born gardener">New-born gardener</option>
					<option value="Climbing the learning curve">Climbing the learning curve</option>
					<option value="Green thumb level">Green thumb level</option>
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
				<Link to="/profile">
					<button type="button" className="btn btn-style m-auto" onClick={helper}>
						Update and Save
					</button>
				</Link>
			</div>
		</div>
	);
};

{
	/* <div className="user-info d-flex justify-content-around">
				<div className="text-center mb-0 w-25">
					<h5 className="heading text-center">Hardiness Zone: </h5>
					<Link to="/hardiness">
						<p>Find your hardiness zone</p>
					</Link>
				</div>
				<input
					className="color-item2 text-center w-25"
					placeholder={
						store.usersPersonal[0].hardiness_zone
							? store.usersPersonal[0].hardiness_zone
							: "Enter Your Hardiness Zone"
					}
					onChange={userGardenInput}
					aria-label="hardiness_zone"
					name="hardiness_zone"
					type="text"
				/>
			</div> */
}
