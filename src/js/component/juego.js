import React, { useState } from "react";
//create your first component
export function Juego() {
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
		verificarGanador();
	};

	const [ganador, setGanador] = useState(false);

	const verificarGanador = () => {
		if (ganador == false) {
			for (let i = 0; i < tablero.length; i = i + 3) {
				console.log(i);
				if (
					tablero[i] == tablero[i + 1] &&
					tablero[i + 1] == tablero[i + 2] &&
					tablero[i] != ""
				) {
					setGanador(true);
				}
			}
			for (let i = 0; i < 3; i++)
				if (
					(tablero[i] == tablero[i + 3]) == tablero[i + 6] &&
					tablero[i] != ""
				)
					setGanador(true);
			if ((tablero[0] == tablero[4]) == tablero[8] && tablero[0] != "")
				setGanador(true);
			if ((tablero[2] == tablero[4]) == tablero[6] && tablero[2] != "")
				setGanador(true);
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
					<h2>turno de {armaActual}</h2>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja0 == "" ? setCaja0(armaActual) : caja0;
						cambiarArma();
						jugada(0);
						if (ganador) alert("hay un ganador");
					}}>
					<h1 className="marcas">{caja0}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja1 == "" ? setCaja1(armaActual) : caja1;
						cambiarArma();
						jugada(1);
					}}>
					<h1 className="marcas">{caja1}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja2 == "" ? setCaja2(armaActual) : caja2;
						cambiarArma();
						jugada(2);
					}}>
					<h1 className="marcas">{caja2}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja3 == "" ? setCaja3(armaActual) : caja3;
						cambiarArma();
						jugada(3);
					}}>
					<h1 className="marcas">{caja3}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja4 == "" ? setCaja4(armaActual) : caja4;
						cambiarArma();
						jugada(4);
					}}>
					<h1 className="marcas">{caja4}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja5 == "" ? setCaja5(armaActual) : caja5;
						cambiarArma();
						jugada(5);
					}}>
					<h1 className="marcas">{caja5}</h1>
				</div>
			</div>
			<div className="row flex-row d-flex justify-content-center">
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja6 == "" ? setCaja6(armaActual) : caja6;
						cambiarArma();
						jugada(6);
					}}>
					<h1 className="marcas">{caja6}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja7 == "" ? setCaja7(armaActual) : caja7;
						cambiarArma();
						jugada(7);
					}}>
					<h1 className="marcas"> {caja7}</h1>
				</div>
				<div
					className="m-2 cajita p-2 d-flex justify-content-center align-items-center"
					onClick={() => {
						caja8 == "" ? setCaja8(armaActual) : caja8;
						cambiarArma();
						jugada(8);
					}}>
					<h1 className="marcas">{caja8}</h1>
				</div>
			</div>
		</div>
	);
}
