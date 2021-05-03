import React from "react";
import PropTypes from "prop-types";

export const Intro = props => {
	return (
		<div>
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 texto p-2">
					<h1>Ta Te Ti en react.js</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 texto">
					<h2>Pick a Weapon!</h2>
				</div>
			</div>
			<div
				className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
				onClick={props.empezar}>
				<h1 className="marcas">X</h1>
			</div>
			<div
				className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
				onClick={props.empezar}>
				<h1 className="marcas">O</h1>
			</div>
		</div>
	);
};

Intro.propTypes = {
	empezar: PropTypes.func
};
