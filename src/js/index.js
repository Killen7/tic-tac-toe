//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Juego } from "./component/juego.js";
import { Intro } from "./component/intro.js";

const [Listo, setListo] = useState(false);
const empezar = () => {
	setListo(true);
};

//render your react application

ReactDOM.render(
	Listo ? <Juego /> : <Intro empezar={empezar} />,
	document.querySelector("#app")
);
