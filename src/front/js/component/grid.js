import React from "react";
import { Link } from "react-router-dom";

export const Grid = () => {
	const numbers = [];
	for (let i = 0; i < 48; i++) {
		numbers.push(i);
	}
	return (
		<>
			<h1 className="text-center">Plants Garden</h1>
			<div className="container justify-content-center d-flex flex-row flex-wrap">
				{numbers.map((el, i) => (
					<div className="square zoom-in" key={i}>
						<i className="fas fa-plus" />
					</div>
				))}
			</div>
		</>
	);
};
