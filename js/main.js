$form = document.querySelector("#carta-a-santa");

nombre = $form.nombre.value;
ciudad = $form.ciudad.value;
comportamiento = $form.comportamiento.value;
regalo = $form["descripcion-regalo"].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(regalo);

function validarNombre(nombre){
	if (nombre.length === 0){
		return "El nombre debe tener como minimo 1 caracter.";
	}

	if (nombre.length > 50){
		return "El nombre debe tener menos de 50 caracteres.";
	}

	return "";
}

function validarCiudad(ciudad){
	if (ciudad.length === 0){
		return "Tiene que seleccionar una ciudad";
	}

	return "";
}

function validarComportamiento (comportamiento){
	if (comportamiento.length === 0){
		return "Tiene que seleccionar como te comportaste";
	}
	return "";
}

function validarRegalo (regalo){
	if (regalo.length === 0){
		return "Este campo tiene que tener como minimo 1 caracter";
	}

	if (regalo.length > 250){
		return "Este campo no puede superar los 250 caracteres.";
	}
	return "";
}
