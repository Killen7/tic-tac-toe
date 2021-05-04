import React from "react";
import PropTypes from "prop-types";

export const Intro = props => {
	return (
		<div>
			<div className="container texto mb-2">
				<h1 className="d-flex justify-content-center p-3 pt-5">
					Ta Te Ti en React.js
				</h1>
				<h2 className="d-flex justify-content-center my-3">
					Pick A Weapon
				</h2>
			</div>
			<div className="container mb-2">
				<div className="row d-flex justify-content-center">
					<div className="py-3 px-5 caja rounded mt-5">
						<p className="d-flex justify-content-center texto-sub align-middle">
							<strong>CHOOSE YOUR WEAPON</strong>
						</p>
						<div>
							<input placeholder="Player 1"></input>
							<input placeholder="Player 2"></input>
						</div>
						<div className="d-flex justify-content-center mt-2">
							<div
								onClick={props.comienzaX}
								className="m-2 cajita border border-success p-2 d-flex justify-content-center align-items-center">
								<h1 className="marcas">X</h1>
							</div>
							<div
								onClick={props.comienzaO}
								className="m-2 cajita border border-success p-2 d-flex justify-content-center align-items-center">
								<h1 className="marcas">O</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Intro.propTypes = {
	comienzaX: PropTypes.func,
	comienzaO: PropTypes.func
};
