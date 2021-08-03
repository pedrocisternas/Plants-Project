import React, { useState, useEffect, useContext, useRef } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext.js";
import { HomeReg } from "./pages/HomeReg";
import { HomeUnreg } from "./pages/HomeUnreg";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { SignupPersonal } from "./pages/SignupPersonal";
import { SignupGarden } from "./pages/SignupGarden";
import { UserProfile } from "./pages/UserProfile";
import { About } from "./pages/About";
import { AddPlant } from "./pages/AddPlant";
import { PlantList } from "./pages/PlantList";
import { LandingPage } from "./pages/LandingPage";
import { PersonalInfo } from "./pages/PersonalInfo";
import { GardenInfo } from "./pages/GardenInfo";
import { SearchPlant } from "./pages/SearchPlant";
import { FindHardinessZone } from "./pages/FindHardinessZone";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar show={show} />
					<Switch>
						<Route exact path="/">
							<HomeUnreg />
						</Route>
						{/* <Route exact path="/homeUnreg">
							<HomeUnreg />
						</Route> */}
						<Route exact path="/homeReg">
							<HomeReg />
							{/* {store.activeUsername ? <HomeReg /> : <Redirect to="/" />} */}
						</Route>
						<Route exact path="/login">
							<Login showButtons={() => setShow(true)} />
						</Route>
						<Route exact path="/logout">
							<Logout showButtons={() => setShow(false)} />
						</Route>
						<Route exact path="/profile">
							<UserProfile />
						</Route>
						<Route exact path="/personal">
							{store.activeUsername ? <PersonalInfo /> : <Redirect to="/" />}
						</Route>
						<Route exact path="/garden">
							{store.activeUsername ? <GardenInfo /> : <Redirect to="/" />}
						</Route>
						<Route exact path="/signuppersonal">
							<SignupPersonal />
						</Route>
						<Route exact path="/signupgarden">
							<SignupGarden />
						</Route>
						<Route exact path="/addplant">
							{store.activeUsername ? <AddPlant /> : <Redirect to="/" />}
						</Route>
						<Route exact path="/searchplant">
							{store.activeUsername ? <SearchPlant /> : <Redirect to="/" />}
						</Route>
						<Route exact path="/hardiness">
							{store.activeUsername ? <FindHardinessZone /> : <Redirect to="/" />}
						</Route>
						<Route exact path="/plantlist">
							{store.activeUsername ? <PlantList /> : <Redirect to="/" />}
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
