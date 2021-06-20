import React from "react";
import { Link } from "react-router-dom";

export const Grid = () => {
	const numbers = [];
	for (let i = 0; i < 100; i++) {
		numbers.push(i);
	}
	return (
		<>
			<h1 className="text-center">Plants Garden</h1>
			<div className="container d-flex flex-row flex-wrap">
				{numbers.map((e, i) => (
					<div className="square" key={i}>
						<i className="fas fa-plus" />
					</div>
				))}
			</div>
		</>
	);
};
