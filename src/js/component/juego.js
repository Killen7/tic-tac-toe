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

	const jugada = posicion => {
		let tableroAux = [...tablero];
		tableroAux[posicion] = props.armaActual;
		setTablero(tableroAux);
		verificarGanador(tableroAux);
	};

	const [ganador, setGanador] = useState("");

	const verificarGanador = tab => {
		if (ganador == "") {
			for (let i = 0; i < tab.length; i = i + 3) {
				if (
					tab[i] == tab[i + 1] &&
					tab[i + 1] == tab[i + 2] &&
					tab[i] != ""
				)
					setGanador(props.armaActual);
			}
			for (let i = 0; i < tab.length; i++) {
				if (
					tab[i] == tab[i + 3] &&
					tab[i + 3] == tab[i + 6] &&
					tab[i] != ""
				)
					setGanador(props.armaActual);
			}
			if (tab[0] == tab[4] && tab[4] == tab[8] && tab[0] != "") {
				setGanador(props.armaActual);
			}
			if (tab[2] == tab[4] && tab[4] == tab[6] && tab[2] != "") {
				setGanador(props.armaActual);
			}
		}
	};

	const anunciarGanador = () => {
		if (ganador != "") {
			alert("El ganador es " + ganador);
		}
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
					<h2>turno de {props.armaActual}</h2>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja0 == "" ? setCaja0(props.armaActual) : caja0;
							props.cambiarArma();
							jugada(0);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja0}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja1 == "" ? setCaja1(props.armaActual) : caja1;
							props.cambiarArma();
							jugada(1);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja1}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja2 == "" ? setCaja2(props.armaActual) : caja2;
							props.cambiarArma();
							jugada(2);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja2}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja3 == "" ? setCaja3(props.armaActual) : caja3;
							props.cambiarArma();
							jugada(3);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja3}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja4 == "" ? setCaja4(props.armaActual) : caja4;
							props.cambiarArma();
							jugada(4);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja4}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja5 == "" ? setCaja5(props.armaActual) : caja5;
							props.cambiarArma();
							jugada(5);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja5}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja6 == "" ? setCaja6(props.armaActual) : caja6;
							props.cambiarArma();
							jugada(6);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja6}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja7 == "" ? setCaja7(props.armaActual) : caja7;
							props.cambiarArma();
							jugada(7);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas"> {caja7}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						if (ganador == "") {
							caja8 == "" ? setCaja8(props.armaActual) : caja8;
							props.cambiarArma();
							jugada(8);
						} else {
							anunciarGanador();
						}
					}}>
					<h1 className="marcas">{caja8}</h1>
				</div>
			</div>
		</div>
	);
}

Juego.propTypes = {
	armaActual: PropTypes.string,
	cambiarArma: PropTypes.func
};
