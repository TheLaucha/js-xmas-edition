function probarValidarNombre(){
  console.assert(
    validarNombre("") === "El nombre debe tener como minimo 1 caracter.", "Validar nombre no valido que el nombre sea vacio."
    );

  console.assert(
    validarNombre("111111111111111111111111111111111111111111111111111") === "El nombre debe tener menos de 50 caracteres.", "Validar nobre no valido que el nombre sea menor a 50 caracteres."
    );
}

function probarValidarCiudad(){
  console.assert(
    validarCiudad("") === "Tiene que seleccionar una ciudad", "Validar nombre no valido que la ciudad este seleccionada"
    );
}

function probarValidarComportamiento(){
  console.assert(
    validarComportamiento("") === "Tiene que seleccionar como te comportaste", "Validar comportamiento no valido que el comportamiento este seleccionado"
    );
}

function probarValidarRegalo(){
  console.assert(
    validarRegalo("") === "Este campo tiene que tener como minimo 1 caracter", "Validar regalo no valido que el campo este vacio"
    );

  console.assert(
    validarRegalo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "Este campo no puede superar los 250 caracteres.", "Validar campo de regalo no valido que el campo tenga menos de 250 caraccteres"
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento()
probarValidarRegalo();