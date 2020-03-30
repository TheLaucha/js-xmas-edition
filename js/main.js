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

	if (!/^[a-z]+$/i.test(nombre)){
		return "El campo nombre solo acepta letras."
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

	if (!/^[a-z0-9]+$/i.test(regalo)){
		return "El campo descripcion solo puede tener numeros y letras."
	}

	return "";
}

function validarFormulario(event){
	const $form = document.querySelector("#carta-a-santa");

	const nombre = $form.nombre.value;
	const ciudad = $form.ciudad.value;
	const descripcion = $form["descripcion-regalo"].value;

	const errorNombre = validarNombre(nombre);
	const errorCiudad = validarCiudad(ciudad);
	const errorDescripcion = validarRegalo(descripcion);

	const errores = {
		nombre: errorNombre,
		ciudad: errorCiudad,
		"descripcion-regalo": errorDescripcion
	};

	console.log(errores);

	const esExito = manejarErrores(errores) === 0;

	if (esExito){
		$form.className = "oculto";
		document.querySelector("#exito").className = "";
		setTimeout("location.href='wishlist.html'", 5000);
	}

	event.preventDefault();
}

function manejarErrores(errores){

	//Object.keys obtiene las llaves del objeto "errores".

	const keys = Object.keys(errores);

	const $errores = document.querySelector("#errores");

	let cantidadErrores = 0;

	 while ($errores.firstChild) {
        $errores.removeChild($errores.firstChild);
    }

	keys.forEach(function(key){

		const error = errores[key];


		if (error){
			cantidadErrores++;

			$form[key].className = "error"

			const $error = document.createElement("li");
			$error.className = "mensajeError";
			$error.innerText = error;

			$errores.appendChild($error);
		} 

		else {
			$form[key].className = ""
		}

	});

	console.log(cantidadErrores);

	return cantidadErrores;
	

	/*

	errorName = errores.nombre;
	errorCity = errores.ciudad;
	errorText = errores.descripcionRegalo;


	//Si errorName no esta vacio muestra el error. Si ESTA vacio no muestra ningun error.

	if (errorName){
		$form.nombre.className = "error";
	} else {
		$form.nombre.className = "";
	}

	if (errorCity){
		$form.ciudad.className = "error";
	} else {
		$form.ciudad.className = "";
	}

	if (errorText){
		$form[`descripcion-regalo`].className = "error";
	} else {
		$form[`descripcion-regalo`].className = "";
	}

	*/
}


$form.onsubmit = validarFormulario;


// El mensaje se muestre 5 segundos y nos redireccione a whilist.html
// Limpiar los errores en cada submit
// 