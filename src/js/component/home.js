import React, { useState } from "react";

//create your first component
export function Home() {
	const estructuraSemaforo = {
		width: "200px",
		height: "400px",
		webkitBoxShadow:
			"5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)",
		boxShadow:
			" 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)"
	};
	const palito = {
		width: "20px",
		height: "50px",
		webkitBoxShadow:
			"5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)",
		boxShadow:
			" 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)"
	};
	const botonComun = {
		padding: "45px",
		borderRadius: "100%",
		webkitBoxShadow:
			"5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)",
		boxShadow:
			" 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)"
	};
	const luz1 = {
		padding: "45px",
		borderRadius: "100%",
		background: "red",
		webkitBoxShadow:
			"5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)",
		boxShadow:
			" 8px 5px 29px 16px red, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)"
	};
	const luz2 = {
		padding: "45px",
		borderRadius: "100%",
		background: "yellow",
		webkitBoxShadow:
			"5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)",
		boxShadow:
			" 8px 5px 29px 16px yellow, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)"
	};
	const luz3 = {
		padding: "45px",
		borderRadius: "100%",
		background: "green",
		webkitBoxShadow:
			"5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)",
		boxShadow:
			" 8px 5px 29px 16px green, inset 4px 4px 15px 0px #000000, 40px 5px 27px 38px rgba(255, 255, 255, 0)"
	};

	const [encendido1, setEncendido1] = useState(botonComun);
	/* Funcion de cambio de color */
	const cambioColor = () => {
		setEncendido1(luz1);
		setEncendido2(botonComun);
		setEncendido3(botonComun);
	};
	const [encendido2, setEncendido2] = useState(botonComun);
	/* Funcion de cambio de color */
	const cambioColor2 = () => {
		setEncendido2(luz2);
		setEncendido1(botonComun);
		setEncendido3(botonComun);
	};
	const [encendido3, setEncendido3] = useState(botonComun);
	/* Funcion de cambio de color */
	const cambioColor3 = () => {
		setEncendido3(luz3);
		setEncendido1(botonComun);
		setEncendido2(botonComun);
	};

	return (
		<div className="container ">
			<div className="row justify-content-center">
				<div className="bg-dark" style={palito}></div>
			</div>
			<div className="row justify-content-center text-center">
				<div className="bg-dark" style={estructuraSemaforo}>
					<div className="col-12 mt-5 h-25">
						<button
							style={encendido1}
							onClick={cambioColor}></button>
					</div>
					<div className="col-12 mt-2 h-25">
						<button
							style={encendido2}
							onClick={cambioColor2}></button>
					</div>
					<div className="col-12 mt-2 h-25">
						<button
							style={encendido3}
							onClick={cambioColor3}></button>
					</div>
				</div>
			</div>
		</div>
	);
}
