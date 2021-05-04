import React, { useState } from "react";
import { Juego } from "./juego";
import { Intro } from "./intro";

export function Home() {
	const [listo, setListo] = useState(false);

	const comienzaX = () => {
		setListo(true);
		setArmaActual("X");
	};

	const comienzaO = () => {
		setListo(true);
		setArmaActual("O");
	};

	const cambiarArma = () => {
		if (armaActual === "X") {
			setArmaActual("O");
		} else if (armaActual === "O") {
			setArmaActual("X");
		}
	};

	const [armaActual, setArmaActual] = useState("");

	return (
		<div>
			{listo ? (
				<Juego armaActual={armaActual} cambiarArma={cambiarArma} />
			) : (
				<Intro comienzaX={comienzaX} comienzaO={comienzaO} />
			)}
		</div>
	);
}
