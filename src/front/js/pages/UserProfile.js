import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { PersonalInfo } from "../component/personalInfo";

export const UserProfile = () => {
	const { store, actions } = useContext(Context);

	return <PersonalInfo />;
};
