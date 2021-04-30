import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-3 d-flex flex-column justify-content-center container tablero p-2 mx-auto rounded-lg">
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 texto p-2">
					<h1>Ta Te Ti en react.js</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 texto">
					<h2>turno de {props.jugador}</h2>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja0}</h1>
				</div>
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja1}</h1>
				</div>
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja2}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja3}</h1>
				</div>
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja4}</h1>
				</div>
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja5}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja6}</h1>
				</div>
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas"> {props.caja7}</h1>
				</div>
				<div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
					<h1 className="marcas">{props.caja8}</h1>
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	jugador: PropTypes.string,
	caja0: PropTypes.string,
	caja1: PropTypes.string,
	caja2: PropTypes.string,
	caja3: PropTypes.string,
	caja4: PropTypes.string,
	caja5: PropTypes.string,
	caja6: PropTypes.string,
	caja7: PropTypes.string,
	caja8: PropTypes.string
};
