export function calcularTrabajo(trabajo) {
	let precio;

	switch (trabajo) {
		case "pintura":
			precio = 200;
			break;

		case "techo":
			precio = 300;
			break;

		case "durlock":
			precio = 150;
			break;

		case "losa":
			precio = 500;
			break;

		default:
			break;
	}
	return precio;
}
