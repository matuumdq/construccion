import { useEffect, useState } from "react";
import { calcularTrabajo } from "../helpers";
import Spinner from "./Spinner";
import Error from "./Error";

const Cotizador = () => {
	const [selected, setSelected] = useState("");
	const [height, setHeight] = useState("no");
	const [meters, setMeters] = useState("");
	const [resultado, setResultado] = useState(0);
	const [loading, setLoading] = useState(false);

	const Cotizar = () => {
		setResultado(0);
		selected !== "" && meters !== "" ? setLoading(true) : <Error />;
		let resu = calcularTrabajo(selected);
		resu = resu * meters;
		if (height === "si") {
			setTimeout(() => {
				setResultado(resu * 200);
			}, 2000);
		} else {
			setTimeout(() => {
				setResultado(resu);
			}, 2000);
		}
		setMeters("");
		setHeight("");
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			console.log(resultado);
		}, 2000);
	}, [resultado]);

	const Pintura = () => (
		<div>
			<div className="flex gap-3">
				<p>Metros cuadrados a pintar:</p>
				<input
					type="number"
					placeholder="Ingrese los metros cuadrados a pintar"
					className="bg-yellow-400"
					onChange={(e) => setMeters(e.target.value)}
					value={meters}
				/>
			</div>
			<div className="flex gap-4">
				<p>Es trabajo en altura? </p>
				<select onChange={(e) => setHeight(e.target.value)}>
					<option value="">Seleccione</option>
					<option value="si">Si</option>
					<option value="no">No</option>
				</select>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen flex flex-col gap-5">
			<select onChange={(e) => setSelected(e.target.value)}>
				<option value="">Seleccione</option>
				<option value="pintura">Pintado de su Casa</option>
				<option value="techo">Techo de Chapa</option>
				<option value="durlock">Colocacion de Durlock</option>
				<option value="losa">Colocacion de Losa</option>
			</select>
			{selected === "pintura" && Pintura()}
			{selected !== "" && (
				<button
					onClick={() => Cotizar()}
					className="bg-green-500 rounded-md"
				>
					Cotizar
				</button>
			)}
			{resultado !== 0 && (
				<div>
					El valor de su trabajo aproximado será de: {resultado}
				</div>
			)}
			{loading && <Spinner />}
		</div>
	);
};

export default Cotizador;
