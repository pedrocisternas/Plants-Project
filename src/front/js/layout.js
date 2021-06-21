import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeReg } from "./pages/HomeReg";
import { HomeUnreg } from "./pages/HomeUnreg";
import { Login } from "./pages/Login";
import { SignupPersonal } from "./pages/SignupPersonal";
import { SignupGarden } from "./pages/SignupGarden";
import { UserProfile } from "./pages/UserProfile";
import { About } from "./pages/About";
import { AddPlant } from "./pages/AddPlant";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<HomeUnreg />
						</Route>
						<Route exact path="/homeReg">
							<HomeReg />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/profile/:id">
							<UserProfile />
						</Route>
						{/* <Route exact path="/demo">
							<Demo />
						</Route> */}
						{/* <Route exact path="/single/:theid">
							<Single />
						</Route> */}
						<Route exact path="/signuppersonal">
							<SignupPersonal />
						</Route>
						<Route exact path="/signupgarden">
							<SignupGarden />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
