//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { checkPropTypes } from "prop-types";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div> {props.digitOne % 10}</div>
			<div> {props.digitTwo % 10}</div>
			<div> {props.digitThree % 10}</div>
			<div> {props.digitFour % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	// Puedes declarar que una propiedad es un tipo específico de JS. Por defecto, estas
	// son todas opcionales.
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={four}
			digitTwo={three}
			digitThree={two}
			digitFour={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//render your react application
