//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Juego } from "./component/juego.js";

let cajas = [];
let jugadores = ["X", "O"];

//render your react application
ReactDOM.render(
	<Juego jugador={jugadores[1]} />,
	document.querySelector("#app")
);
