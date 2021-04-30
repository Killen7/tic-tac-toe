import React, { useState } from "react";
import PropTypes from "prop-types";
//create your first component
export function Juego(props) {
	const [tablero, setTablero] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);
	/* const [tablero1, setTablero1] = useState([
		["", "", ""], //[0][0] - [0][1] - [0][2]
		["", "", ""], //[1][0] - [1][1] - [1][2]
		["", "", ""] //[2][0] - [2][1] - [2][2]
	]); */
	const [armaActual, setArmaActual] = useState("X");
	const cambiarArma = () => {
		if (armaActual === "X") {
			setArmaActual("O");
		} else if (armaActual === "O") {
			setArmaActual("X");
		}
	};
	const jugada = posicion => {
		let tableroAux = [...tablero];
		tableroAux[posicion] = armaActual;
		setTablero(tableroAux);
	};
	const [caja0, setCaja0] = useState("");
	const [caja1, setCaja1] = useState("");
	const [caja2, setCaja2] = useState("");
	const [caja3, setCaja3] = useState("");
	const [caja4, setCaja4] = useState("");
	const [caja5, setCaja5] = useState("");
	const [caja6, setCaja6] = useState("");
	const [caja7, setCaja7] = useState("");
	const [caja8, setCaja8] = useState("");
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
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja0 == "" ? setCaja0(props.jugador) : caja0;
						if (caja0 != "" && tablero[0] == "") tablero[0] = caja0;
					}}>
					<h1 className="marcas">{caja0}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja1 == "" ? setCaja1(props.jugador) : caja1;
						if (caja1 != "" && tablero[1] == "") {
							tablero[1] = caja1;
							console.log(caja1);
							console.log(tablero[1]);
						}
					}}>
					<h1 className="marcas">{caja1}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja2 == "" ? setCaja2(props.jugador) : caja2;
					}}>
					<h1 className="marcas">{caja2}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja3 == "" ? setCaja3(props.jugador) : caja3;
					}}>
					<h1 className="marcas">{caja3}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja4 == "" ? setCaja4(props.jugador) : caja4;
					}}>
					<h1 className="marcas">{caja4}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja5 == "" ? setCaja5(props.jugador) : caja5;
					}}>
					<h1 className="marcas">{caja5}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja6 == "" ? setCaja6(props.jugador) : caja6;
					}}>
					<h1 className="marcas">{caja6}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja7 == "" ? setCaja7(props.jugador) : caja7;
					}}>
					<h1 className="marcas"> {caja7}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						cambiarArma();
						jugada(8);
					}}>
					<h1 className="marcas">{caja8}</h1>
				</div>
			</div>
		</div>
	);
}
Juego.propTypes = {
	jugador: PropTypes.string
};
