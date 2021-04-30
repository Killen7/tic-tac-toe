//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let cajas = ["X", "O", "X", "O", "", "", "O", "", ""];
let jugadores = ["X", "O"];

//render your react application
ReactDOM.render(
	<Home
		jugador={jugadores[1]}
		caja0={cajas[0]}
		caja1={cajas[1]}
		caja2={cajas[2]}
		caja3={cajas[3]}
		caja4={cajas[4]}
		caja5={cajas[5]}
		caja6={cajas[6]}
		caja7={cajas[7]}
		caja8={cajas[8]}
	/>,
	document.querySelector("#app")
);
