function probarValidarNombre(){
  console.assert(
    validarNombre("") === "El nombre debe tener como minimo 1 caracter.", "Validar nombre no valido que el nombre sea vacio."
    );

  console.assert(
    validarNombre("111111111111111111111111111111111111111111111111111") === "El nombre debe tener menos de 50 caracteres.", "Validar nobre no valido que el nombre sea menor a 50 caracteres."
    );

  console.assert(
    validarNombre("111112345") === "El campo nombre solo acepta letras.", "Validar nombre no valido que el nombre solo tengo letras."
    )

  console.assert(
    validarNombre("Fabricio") === "", "La funcion validar nombre no comprobo que el nombre es correcto."
    )
}

function probarValidarCiudad(){
  console.assert(
    validarCiudad("") === "Tiene que seleccionar una ciudad", "Validar nombre no valido que la ciudad este seleccionada"
    );
  console.assert(
    validarCiudad("Buenos Aires") === "", "La funcion validar ciudad no comprobo que se ingrese una ciudad correcta."
    )
}

function probarValidarComportamiento(){
  console.assert(
    validarComportamiento("") === "Tiene que seleccionar como te comportaste", "Validar comportamiento no valido que el comportamiento este seleccionado"
    );
  console.assert(
    validarComportamiento("Muy bien") === "", "La funcion validar comportamiento no comprobo que se ingrese un tipo de comportamiento."
    )
}

function probarValidarRegalo(){
  console.assert(
    validarRegalo("") === "Este campo tiene que tener como minimo 1 caracter", "Validar regalo no valido que el campo este vacio"
    );

  console.assert(
    validarRegalo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "Este campo no puede superar los 250 caracteres.", "Validar campo de regalo no valido que el campo tenga menos de 250 caraccteres"
    );

  console.assert(
    validarRegalo(".,,,") === "El campo descripcion solo puede tener numeros y letras.", "La funcion validar descripcion regalo no valido que fuera solo numeros y letras."
    )

  console.assert(
    validarRegalo ("Regalo") === "", "La funcion validar regalo no comprobo que se ingrese regalo."
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento()
probarValidarRegalo();