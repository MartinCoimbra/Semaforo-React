import React from "react";

//create your first component
export function Home() {
	const estructuraSemaforo = {
		width: "200px",
		height: "400px"
	};
	const palito = {
		width: "20px",
		height: "50px"
	};
	const luz = {
		background: "red",
		padding: "35px",
		borderRadius: "100%"
	};
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="bg-dark" style={palito}></div>
			</div>
			<div className="row justify-content-center text-center">
				<div className="bg-dark" style={estructuraSemaforo}>
					<div className="col-12 mt-5 h-25">
						<button style={luz}>Red</button>
					</div>
					<div className="col-12 mt-2 h-25">
						<button style={luz}>Amarillo</button>
					</div>
					<div className="col-12 mt-2 h-25">
						<button style={luz}>Green</button>
					</div>
				</div>
			</div>
		</div>
	);
}
